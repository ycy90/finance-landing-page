# Development Notes

## Design Process

The initial visual design was created using Google Stitch AI. The related Figma file can be found in the `design` folder.

Although the project was based on the generated design, it was not reproduced exactly. Several design decisions were changed during development based on personal preferences and implementation considerations.

## Responsive Development

At the beginning of the project, responsive design was not yet familiar.

The project was also not initially developed using a mobile-first approach. As a result, a significant part of the implementation had to be reworked by adapting the existing desktop-oriented design to mobile and then redesigning parts of the desktop layout again.

This made the responsive stage more challenging than it would have been with a mobile-first approach.

## Section-by-Section Development

The project was developed section by section rather than building the entire page at once.

For each section, the HTML structure was created first. The DOM structure was reviewed and adjusted until the structure was considered appropriate. CSS implementation was then started only after the HTML structure had been established.

The same process was followed throughout the project, including the navbar, hero, features, trust, newsletter, and footer sections.

This approach made it easier to isolate problems and keep track of which part of the project was being developed or refined.

## CSS Development Process

During the early stages, many CSS values were initially hardcoded. After the design had become more established, CSS custom properties were introduced to create reusable variables for values such as colors, typography, spacing, and other design-related values.

The CSS was subsequently refined and the remaining development was continued using the established variables.

When experimenting with a new design or CSS concept, the initial implementation was often tested using hardcoded values first. Once the result was confirmed, the value was converted into an appropriate CSS variable where necessary.

## New Concepts and Techniques

Several concepts and techniques were learned or applied during this project, including:

- The `<details>` and `<summary>` elements
- `::before` and `::after` pseudo-elements
- Netlify-compatible HTML forms
- Modifier classes
- How to make an element Visually Hidden for Accessibility reasons.
- BEM naming conventions
- CSS custom properties
- Responsive design
- Mobile-first principles

The project also provided practical experience with adapting semantic HTML structures and CSS architecture to a complete multi-section landing page.

## Naming and CSS Organization

A consistent class naming system and CSS organization were used throughout the project.

Following a structured naming approach, particularly with BEM, made it significantly easier to navigate the stylesheet and locate the CSS belonging to a specific component or section.

This became especially useful as the project grew, because the relationship between the HTML structure and its corresponding CSS remained relatively easy to follow.

## Refinement

After the main implementation was completed, the CSS was reviewed and refined.

Unused classes and unnecessary CSS were removed, existing rules were reorganized where necessary, and the stylesheet was adjusted to make the final implementation cleaner and easier to maintain.

The responsive implementation was also refined during this stage.

## Deployment

The completed project was configured to work with Netlify forms and deployed to both GitHub Pages and Netlify.