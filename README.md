# Posts App

This is a React.js application built for the [Dinamo MEA](#). It demonstrates core React concepts, state management, and API interaction using JSONPlaceholder.

---

## **Table of Contents**
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [How to Run the Application](#how-to-run-the-application)
5. [Assumptions and Challenges](#assumptions-and-challenges)
6. [Time Spent](#time-spent)

---

## **Features**
- **Fetch and display data**: Posts are fetched from JSONPlaceholder and displayed in a table.
- **Add Posts**: Users can add new posts using a form.
- **Edit Posts**: Posts can be edited with pre-filled form fields.
- **Delete Posts**: A confirmation modal allows users to delete posts.
- **Optional Features**:
  - Server-Side Rendering (SSR) integration with Next.js (Optional, not implemented in this version).

---

## **Technologies Used**
- **Frontend**: React.js, Ant Design, TypeScript.
- **API**: JSONPlaceholder.
- **Tooling**: Vite, Axios.

---

## **Setup and Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AhmedSamirFathy/Dinamo-Assesment_Posts.git
   cd Dinamo-Assesment_Posts
2. **Install dependencies**:
   ```bash
   npm install

---

## **How to Run the Application**
1. **Start the development server**:
   ```bash
   npm run dev
2. **Open the application**:
   navigate to http://localhost:5173 in your browser.

---

## **Assumptions and Challenges**
- The id of newly added posts starts at 101 to distinguish them from fetched posts.
- JSONPlaceholder does not persist changes, so added/edited/deleted posts exist only in the app state during runtime.
- Handling temporary states for locally added posts while maintaining compatibility with API logic.
- This was my first time to use Ant Design so it took me some time to understand and figure out how it works.

---

## **Time Spent**
- Initial Setup: ~15 minutes
- Core Features Implementation: ~2 hours
- Optional Features Implementation: ~2 hours
- Debugging and Testing: ~30 minutes 
- Documentation and Refactoring: ~30 minutes 
- Total Time: ~5 hours and 15 minutes approximately

   
