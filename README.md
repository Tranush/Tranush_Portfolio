# Tranush Kondapalli - Professional Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Designed to showcase professional expertise in data engineering, software development, and entrepreneurship.

## 🚀 Features

- **Modern Design**: Clean, professional layout optimized for recruiters and professionals
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **Fast Loading**: Optimized for speed and performance
- **Accessible**: Built with accessibility best practices
- **Live Deployment**: Currently deployed on Firebase Hosting

## 📋 Sections

- **Hero**: Professional introduction with call-to-action buttons
- **About**: Personal story, stats, and areas of focus
- **Experience**: Detailed professional experience with achievements
- **Projects**: Showcase of technical projects with filtering
- **Publications**: Research papers, articles, and blog posts
- **Startups**: Entrepreneurial ventures and achievements
- **Skills**: Comprehensive skill set with proficiency levels
- **Contact**: Contact form and professional information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Firebase Hosting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`components/Hero.tsx`)
   - Update name, title, and description
   - Replace placeholder headshot
   - Update social media links

2. **About Section** (`components/About.tsx`)
   - Update personal story and stats
   - Modify areas of focus

3. **Experience Section** (`components/Experience.tsx`)
   - Add your work experience
   - Update achievements and technologies

4. **Projects Section** (`components/Projects.tsx`)
   - Add your projects
   - Update GitHub and demo links
   - Modify technologies used

5. **Publications Section** (`components/Publications.tsx`)
   - Add your research papers and articles
   - Update publication links

6. **Startups Section** (`components/Startups.tsx`)
   - Add your entrepreneurial ventures
   - Update company information

7. **Skills Section** (`components/Skills.tsx`)
   - Update your technical skills
   - Modify proficiency levels
   - Add certifications

8. **Contact Section** (`components/Contact.tsx`)
   - Update contact information
   - Modify social media links

### Styling

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Modify fonts in `app/globals.css`
- **Animations**: Adjust animation settings in component files

### Images

Replace placeholder images with your actual photos:
- Professional headshot for the hero section
- Project screenshots
- Company logos

## 🚀 Deployment

### Firebase Hosting (Current Setup)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase project**
   ```bash
   firebase init hosting
   ```

4. **Build and deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Live URL
- **Portfolio**: https://my-portfolio-85f7e.web.app
- **Firebase Console**: https://console.firebase.google.com/project/my-portfolio-85f7e/overview

### Other Platforms

- **Vercel**: Connect repository and deploy automatically
- **Netlify**: Connect repository and deploy
- **GitHub Pages**: Use GitHub Actions for deployment

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── Publications.tsx
│   ├── ScrollToTop.tsx
│   ├── Skills.tsx
│   └── Startups.tsx
├── public/
│   └── (your images)
├── .firebase/
│   └── hosting.b3V0.cache
├── .firebaserc
├── firebase.json
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ by Tranush Kondapalli**
