
# B2Prime Help Center Theme (Zendesk)

This repository contains a custom Zendesk Help Center theme designed for **B2Prime**, using the company's official color palette and branding style.

## 📁 Structure

```
b2prime_helpcenter_theme/
│
├── templates/
│   └── index_page.hbs     # Main homepage template
│
├── assets/
│   ├── style.css          # Custom styles using B2Prime brand colors
│   └── script.js          # JavaScript for chat integration
```

## 🎨 Features

- Styled using B2Prime's branding (green palette, dark background)
- Prominent "Create Ticket" and "Open Chat" buttons
- Quick links to common categories (Deposits, Withdrawals, KYC, etc.)
- Search bar and FAQ section
- Responsive layout

## 🚀 Installation Instructions

1. **Clone or download** this repository.

2. **Connect to Zendesk**:
   - Go to **Zendesk Guide Admin**
   - Click **Customize Design**
   - Click **Add theme** → **Connect GitHub**
   - Link your GitHub repository

3. **Replace default templates**:
   - Copy contents from `templates/index_page.hbs` into Zendesk's `home_page.hbs`
   - Add link to `assets/style.css` in the `document_head.hbs` or inject it inline
   - Attach `script.js` via script tag at the end of the body

4. **Enable and publish** the theme in Zendesk Guide.

## 💬 Chat Integration (Optional)

This theme assumes you're using Zendesk's Web Widget. The script enables the widget when the user clicks **Open Chat**. Make sure the widget is enabled in your Zendesk settings.

## 📞 Support

Questions or issues? Contact your internal web team or Zendesk developer support.

---

Made for B2Prime 💚
