const http = require('http');
const port = 1000;
const url = require('url');
const server = http.createServer(newServer);

function newServer(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    let myURL = req.url;
    let queryString = url.parse(myURL, true).query;
    console.log(queryString);

    const prod = ['Milk', 'Eggs', 'Cheese', 'Pork', 'Shrimp', 'Chicken'];
    let isFound = false;

    if (myURL.startsWith('/profile')) {
        res.write("This is the /profile page!");
        
    } else if (myURL.startsWith('/products')) {
        res.write("This is the /products page!");

        for (let p of prod) {
            if (p.toLowerCase().includes(queryString.search.toLowerCase())) {
                isFound = true;
                break;
            }
        }

        if (isFound) { res.write(` Product ${queryString['search']} found`); }
        else { res.write(` Product ${queryString['search']} not found`); }
        
    } else if (myURL.startsWith('/cart')) {
        res.write("This is the /cart page!");

    } else if (myURL.startsWith('/register')) {
        res.write("This is the /register page!");

    } else if (myURL.startsWith('/login')) {
        res.write("This is the /login page!");

    } else {
        res.write("Hey now, that's not part of the gig!");

    }
    res.end();
}

server.listen(port);