
## Table of Contents

1.  Introduction
2.  Global Design System Foundation
    2.1. Typography System
        2.1.1. Font Selection
        2.1.2. Heading Hierarchy
        2.1.3. Body Text Styling
        2.1.4. Text Animation Style
        2.1.5. Advanced CSS Custom Fonts and Scalable Typography Rules
    2.2. Color System
        2.2.1. Color Palette Definition
        2.2.2. Gradient Systems
        2.2.3. CSS Variables and Modern Gradient Styling
    2.3. Spacing & Layout Rules
        2.3.1. Spacing Scale
        2.3.2. Container Width System
        2.3.3. Section Spacing Standards
    2.4. Component Styling Standards
        2.4.1. Cards
        2.4.2. Buttons
        2.4.3. Navigation Elements
        2.4.4. Forms
        2.4.5. Modals
        2.4.6. Tooltips
    2.5. Advanced CSS Requirements
        2.5.1. CSS Properties Integration
    2.6. Layout Engineering Requirements
        2.6.1. Flexbox Usage Rules
        2.6.2. CSS Grid Usage Rules
        2.6.3. Responsive Design Rules
    2.7. Accessibility Requirements
    2.8. Performance Design Requirements
3.  Home Page System Design
    3.1. Home Page Goals
    3.2. Home Page Section Design
        3.2.1. Navigation Bar Design
        3.2.2. Hero Section Design
        3.2.3. Skills Preview Section
        3.2.4. Featured Projects Preview Section
        3.2.5. Achievement Highlight Section
        3.2.6. Call-to-Action Section
        3.2.7. Footer Design
    3.3. React Component Breakdown
    3.4. Interaction and Animation Design Strategy
4.  Conclusion

## 1. Introduction

This document outlines the comprehensive frontend system design for a professional portfolio web application, tailored for Amuchin Feoley Togba. As a Senior UI/UX Architect, Frontend System Designer, and React Engineering Specialist, the objective is to create a visually impressive, highly professional, scalable, and reusable frontend system architecture. This design adheres to modern portfolio UI engineering standards, emphasizing component reusability, scalability, responsiveness, and accessibility. The focus of this document is exclusively on the Global Design System Foundation and the Home Page System Design, utilizing React.js Component Architecture, Advanced CSS Engineering, and Responsive Web Design Principles, reflecting Amuchin's expertise in IT, Networking, and Full-Stack Development.

# Global Design System Foundation

This document outlines the foundational elements of the Global Design System for a professional portfolio web application. The aim is to establish a visually impressive, highly professional, scalable, and reusable frontend system architecture that adheres to modern UI engineering standards, ensuring component reusability, scalability, responsiveness, and accessibility.

## 1. Typography System

### 1.1. Font Selection

The selection of fonts is crucial for establishing the visual tone and readability of the portfolio. For the **Primary Font**, 'Inter' or 'Roboto' (sans-serif) are recommended due to their professional, modern, highly readable, and web-friendly characteristics. Inter is excellent for UI design, while Roboto, developed by Google, is known for its versatility. For the **Secondary Font**, 'Fira Code' or 'Source Code Pro' (monospace) will be used for code snippets, technical terms, or subtle accents, reflecting a developer's profile. Alternatively, a slightly more decorative sans-serif like 'Montserrat' could be used for headings if a stronger visual contrast is desired. These choices ensure consistency and enhance the overall professional identity of the portfolio.

### 1.2. Heading Hierarchy

A well-defined heading hierarchy ensures content is structured logically and is easily scannable. The system will define six levels of headings (H1-H6), each with a specific role:

| Heading Level | Purpose & Characteristics                                    |
| :------------ | :----------------------------------------------------------- |
| **H1**        | **Hero Headline:** Large, bold, and impactful, reserved for main page titles to capture immediate attention. |
| **H2**        | **Section Title:** Prominent, used for major section headings to clearly delineate content areas. |
| **H3**        | **Subsection Title:** Clear, used for sub-sections within major sections, providing further content organization. |
| **H4**        | **Card Title/Minor Heading:** Concise, used for component titles or smaller headings, maintaining visual hierarchy within components. |
| **H5, H6**    | Used for less prominent headings or specific UI elements where a subtle hierarchy is required. |

### 1.3. Body Text Styling

Body text styling focuses on legibility and user comfort. Paragraphs will feature a readable font size, optimal line height, and appropriate letter spacing to ensure ease of reading. Links will be styled with a distinctive color, along with clear hover and focus states to enhance accessibility and user interaction.

### 1.4. Text Animation Style

Text animations will be used judiciously to add subtle engagement without distracting the user. A **Dynamic Typing Text Animation** will be implemented for hero section headlines, introducing key phrases or roles in an engaging manner. Minimal and elegant transitions will be applied as **Hover Effects** for interactive text elements, such as navigation links and call-to-action text.

### 1.5. Advanced CSS Custom Fonts and Scalable Typography Rules

To ensure robust and flexible typography, the system will utilize `@font-face` for custom font integration, with proper fallbacks to system fonts. Scalable typography will be achieved through the implementation of `clamp()` for responsive font sizes across various devices. All font sizes will be defined using `rem` units to maintain consistency and accessibility, allowing for easy scaling based on user preferences.

## 2. Color System

### 2.1. Color Palette Definition

A thoughtfully curated color palette is essential for visual consistency and brand identity. The system will define a **Primary Brand Color** such as a deep, professional blue (e.g., `#007BFF`) or a sophisticated dark teal (e.g., `#008080`), representing reliability and innovation. This will be complemented by **Secondary Accent Colors** like a vibrant orange (e.g., `#FFC107`) for calls-to-action and highlights, and a subtle grey (e.g., `#6C757D`) for secondary text or borders. A clean, light background (e.g., `#F8F9FA` or `#FFFFFF`) will be used for primary content, with a darker, subtle grey (e.g., `#343A40`) for footers or specific sections. A dark mode theme will also be considered. **Text Colors** will include a dark charcoal (e.g., `#212529`) for primary text, a lighter grey (e.g., `#495057`) for secondary text, and a muted tone (e.g., `#ADB5BD`) for subtle hints. All colors will adhere to WCAG 2.1 AA contrast ratios for accessibility.

### 2.2. Gradient Systems

Gradients will be employed to add depth and visual appeal. A **Primary Gradient** will subtly transition from the primary brand color to a slightly darker or lighter shade of the same hue (e.g., `linear-gradient(to right, #007BFF, #0056B3)`), used for hero sections or prominent backgrounds. **Accent Gradients** will utilize the primary and secondary accent colors for interactive elements like buttons or cards, providing a modern and dynamic feel (e.g., `linear-gradient(to right, #007BFF, #FFC107)`).

### 2.3. CSS Variables and Modern Gradient Styling

All colors and gradients will be implemented using CSS custom properties (variables). This approach facilitates easy management, theme switching, and ensures consistency across the entire application. Modern CSS functions like `linear-gradient()` and `radial-gradient()` will be utilized for smooth and performant gradient styling.