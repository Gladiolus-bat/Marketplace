
# Haven

A multi-page e-commerce marketplace built with HTML, CSS, and vanilla JavaScript.

---

## Overview

Haven is a frontend-only marketplace where users can browse products by category, view individual product details, and complete a payment flow. The project is structured as a set of static HTML pages with shared styles and scripts.

---

## Project Structure

```
haven/
├── index.html                  # Homepage
├── css/
│   └── style.css               # Global styles (header, footer, layout)
├── javascript/
│   └── script.js               # Shared scripts (cart, notifications, marquee)
├── images/                     # All image assets organized by category
│   ├── Header/
│   ├── Clothes/
│   ├── Electronics/
│   ├── Watches/
│   ├── Shoes/
│   ├── Other/
│   ├── Payment/
│   └── Logo/
└── pages/
    ├── productPage.html         # All products with sidebar filter
    ├── productDetails.html      # Individual product view
    ├── payment.html             # Payment form with game voucher section
    ├── electronics.html
    ├── jewelry.html
    ├── watches.html
    ├── clothes.html
    ├── others.html
    ├── login.html
    ├── register.html
    └── profile.html
```

---

## Pages

**Homepage** — Hero banner, animated marquee category section, banner highlight, shop now CTA, and a featured products grid.

**Products** — Full product listing with a category sidebar, product cards with images, pricing, and an add-to-cart icon. Includes a news section below the grid.

**Product Details** — Large product image with thumbnails, seller profile link, pricing, quantity selector, buy and cart buttons, and a sell banner section. Features section below with alternating image and text rows on a dark background.

**Profile** — Vendor details with their listed products over the marketplace.

**Login/Register** — A simple Login/Register page with JS integrations.

**Payment** — Split layout with a card form on the left (dark red background) and a game voucher option on the right. Includes client-side form validation.

---

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, CSS animations)
- Vanilla JavaScript (no frameworks or libraries)

---

## Getting Started

No build tools or dependencies required.

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. All pages are navigable from the header and footer links.

or use the Live Server extension in VS Code.

---

## Notes

- Images are not included in the repository. Add your own assets to the `images/` directory following the folder structure above.
- The payment form uses client-side validation only. No backend or payment processing is connected.
- The marquee on the homepage is powered by a small JavaScript loop that duplicates the category list for a seamless scroll effect.

---

## Team

| Name | Role |
|------|------|
| [Sabrina Pradhan](https://github.com/Gladiolus-bat) | Product page + Login/Register Page + Payment Page | 
| [Shirbhooshan Razopadhyay](https://github.com/Shirbhooshan) | Home Page + Payment Page + JS |
| [Sahil Shrestha](https://github.com/Sai-Stha) | Product Descriptions Page |
| [Supragya Singh Sipai](https://github.com/subi1313) | Profile Page + Header/Footer |

---

## License

This project is for educational and personal use.