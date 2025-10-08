# JMSG-Angular-Prototype
A small frontend application developed with Angular that allows users to browse, list, and view details of items within a catalog.

***

# 👨💻 Author
Developed by Jose Maria Sobrinos Garcia (libreyextremo)

***

# 🧠 Framework Angular vs ReactJS
```text
I chose Angular for the following reasons::
• Clear structure and organization:
Angular enforces a clear architecture (modules, components, services, routing, etc.), so I don’t waste time deciding how to organize the project.
• Ready to use CLI:
The Angular CLI lets you create, build, serve, test, and generate code fastly and easily.
Everything included out of the box
• Angular built-in tools:
Angular comes with built-in tools for Routing, HTTP Client, Testing (Jasmine/Karma), SCSS support and Dependency injection.
In React, most of these require installing and configuring external libraries (React Router, Axios, Jest, etc.).
• Fewer decisions, faster development
React gives you freedom, but that also means more setup decisions (state management, router, styling, folder structure...).
Angular defines most of that for you, allowing faster progress when time is limited.
```

***

# 🚀 Main Features
```text
• Catalog item listing displayed in a card-based layout.
• Detail view showing extended information for each item.
• Navigation between views using Angular Router.
• Styling with SCSS, organized into partials with variables and mixins.
• Responsive design: adapts to both desktop and mobile screens.
• Testing: component and unit testing.
```

***

# Structure the project.
```text 
src/app/
 ├─ core
    ├─ config
        └─ api-endpoints.ts
    └─ services
        └─ items-service.ts
 ├─ features/catalog/components
    ├─ catalog-detail
    └─ catalog-list
 ├─ models
    └─ item.ts
 ├─ shared/components
    ├─ card
    ├─ footer
    ├─ header
    └─ navbar
 ├─ app-module.ts
 ├─ app-routing-module.ts
```

***

# Styles. 
```text
src/styles/
 ├─ _grid.scss        # grids...
 ├─ _variables.scss   # colors, fonts...
 ├─ _mixins.scss      # reusable mixins
 ├─ _reset.scss       # normalize the default styles
 └─ styles.scss       # main styles file (imports the other ones)
```

***

# ⚙️ Installation and Running
1️⃣ Clone the repository

```bash
git clone https://github.com/libreyextremo/JMSG-Angular-Prototype.git
cd JMSG-Angular-Prototype
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Run the application**

```bash
ng serve
```

The application will be available at:
👉 [http://localhost:4200](http://localhost:4200)

***

# 🧪 Tests (optional)
To run the tests (if any exist):

```bash
ng test
```

***

# 📱 Responsive Design
```text
The application automatically adapts its layout:
• Mobile: one column
• Desktop: up to 5 columns
```

***

# Applied Best Practices
```text
• Modular architecture with separation of concerns.
• Reusable components.
• RxJs: Use of Observables, subscriptions...
• SCSS organized with variables and mixins.
• Commits with clear messages and feature-specific branches.
```

***

# 📖 Technologies Used
```text
• Angular 20: Main framework
• Jasmine / Karma: for component testing
• Angular Material: UI component library for Angular
• TypeScript: Development language
• SCSS/SASS: Styles with preprocessor
• HTML5: Semantic structure
• Git / GitHub / GitFlow: Version control
• Lint: clean, reliable, and maintainable code in Angular projects.
```