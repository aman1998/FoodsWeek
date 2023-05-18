<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://iexcloud.io/images/share-card.png" width="60" height="60" />
  </a>
</p>
<h1 align="center">
  Day stats app
</h1>

Site for stocks list and their detail info

## 🚀 Quick start

1.  **Clone project.**

    ```shell
    git clone git@github.com:aman1998/Iexcloud-app.git
    ```

2.  **Get token key from iexcloud.**

    ```shell
    https://iexcloud.io/console/tokens
    ```

3.  **create .env**

    ```shell
    REACT_APP_IEXCLOUD_TOKEN="token"
    ```

4.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    yarn install
    yarn start
    ```

## 🧐 What's inside?

src architecture
.
├── src - pages - containers - components
─ common - store

1.  **`/pages`**: This directory contains all pages, files must include only import export containers widthout logic.

2.  **`/containers`**: This directory for pages logic, create page components, types and store management. Components inside container can not use in another directory;

3.  **`/components`**: This directory for components, that can be used in multiple containers.

4.  **`/common`**: This directory contains styles, api and utils.

5.  **`/store`**: This directory for root redux and redux-saga settings

6.  **`/UI`**: This directory for ui kits, that can be used in multiple containers and components.

<!-- AUTO-GENERATED-CONTENT:END -->
