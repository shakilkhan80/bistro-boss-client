/**
 * --------------
 * Basic
 * --------------
 * 1.do not show the link to them who should not see it only show to the person/types of user who should see it
 * 2.do not allow to visit the link by typing on the url
 * useAdmin route to check the user is admin or not if the user is not admin redirect the user some other page and  you could logOut the user and send them to the login page
 * 
 * -----------
 * to send data
 * ------------
 * 1.verify jwt token(send authorization token in the header to the server )
 * if possiable use axios jwt token to intercepting the request
 * 2.if it is an admin activity.make sure admin user is posting data by using verifyAdmin
 * */ 