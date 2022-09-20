** Name: Roman Emmanuel Munar**

** Comments: ** 

`Toggle Mock` button toggles where the data is coming from.
- API
- Dribbble design (Why? more accurate representation)

## Actions Taken:
1. Stored the AUTH_TOKEN in a `.env` file
2. Created a wrapper function for `fetch` to add the `Authorization` header on every request
3. Added an overlay on `RecommendedProducts` component
   - Signifies that there more products below it
   - When clicked will reveal more products
4. Used the native radio buttons for the `RadioGroup` component.
5. Added `formatPrice` util to format the price 

## Installed dependencies
**TailwindCSS**
- Styles and markup colocation
  - Allows for faster development, and debugging time
- Allows declaration of design tokens e.g colors, and height

**Zod**
- Asserts the API's types
- Create TS types

**React-query**
- Handles all promise related logic
- Handles stale data
  - Refetch, retry, and caching logic

### Considerations
Since everything lives in the root path I did not add any abstraction for `pages`.

### Issues
- Since API generates random data on every request
  - Displayed products are changing when changing tabs or windows
- Since products from API has no `id`. We can't persist the `like`, and `size` states.

---

# Instructions

Please fork this Sandbox and work on the Challenge stated below on your copy.

# Challenge

Create and display any 2 of these 4 components
https://cdn.dribbble.com/users/1544818/screenshots/17675070/media/3550d2db04b2153b3383b26ba2af29ee.png

You may make them interactable as you wish, demonstrating your knowledge to the best of your abilities

Use these endpoints for mock data:
Products
https://sw-coding-challenge.herokuapp.com/api/v1/products
Notifications
https://sw-coding-challenge.herokuapp.com/api/v1/notifications

Authorization:
Add an `Authorization` header to your requests using this token:

`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs`

# Submission

After completing the challenge, please fill up the form below and share a link of your work to ruz@smartwave.ph

** Name: Roman Emmanuel Munar**

** Comments: ** Any comments on the decisions you made regarding your code that you would like us to know (ex. if you installed packages, why did you choose to use the ones that you did).

# Recommendations

- Feel free to ask questions (jc@smartwave.ph) if any instruction is unclear.
- Focus on readability and consistency.
- Submit your work even if you don't complete the challenge, we're happy to take a look at it and give constructive feedback.
