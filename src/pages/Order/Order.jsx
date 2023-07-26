import React, { useState } from 'react';
import coverImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodOrder from '../../components/FoodOrder/FoodOrder';
import OrderTabs from './OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../Hooks/useMenu';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks','desi']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    const desi = menu.filter(item => item.category === 'desi')
    return (
        <div className='text-center'>
            <Helmet>
                <title>Bisto || Order Food</title>
            </Helmet>
            <Cover img={coverImg} title={'our food'} para={'Would you like to try a dish?'}></Cover>
            <Tabs className={'mt-5'} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Desi</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs
                        items={salad}>
                    </OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs
                        items={desi}>
                    </OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs
                        items={pizza}>
                    </OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs
                        items={soup}>
                    </OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs
                        items={dessert}>
                    </OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs
                        items={drinks}>
                    </OrderTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;