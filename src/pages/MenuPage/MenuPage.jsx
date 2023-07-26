import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import img1 from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import SectionTitle from '../../components/SectionTilte/SectionTitle';
import MenuCategory from './MenuCatagory/MenuCategory';
import imgBg from '../../assets/menu/dessert-bg.jpeg'
import imgBg2 from '../../assets/menu/pizza-bg.jpg'
import imgBg3 from '../../assets/menu/salad-bg.jpg'
import imgBg4 from '../../assets/menu/soup-bg.jpg'
import imgBg5 from '../../assets/menu/kala buna.jpg'
import useMenu from '../../Hooks/useMenu';


const MenuPage = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    const desi = menu.filter(item => item.category === 'desi')

    return (
        <div>
            <Helmet>
                <title>Bisto || Menu</title>
            </Helmet>
            <Cover
                img={img1}
                title="Our Menu"
                para='Would you like to try a dish?'
            ></Cover>
            {/* main cover */}
            <SectionTitle heading="today's offer" subHeading="Don't miss"></SectionTitle>
            {/* offerd menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} coverImg={imgBg} title={'dessert'} para='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'></MenuCategory>
            <MenuCategory items={pizza} coverImg={imgBg2} title={'pizza'} para='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'></MenuCategory>
            <MenuCategory items={salad} coverImg={imgBg3} title={'salad'} para='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'></MenuCategory>
            <MenuCategory items={soup} coverImg={imgBg4} title={'soup'} para='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'></MenuCategory>
            <MenuCategory items={desi} coverImg={imgBg5} title={'desi'} para='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'></MenuCategory>
        </div>
    );
};

export default MenuPage;