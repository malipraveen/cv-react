# CV/Resume Built with Vite + React

This repository hosts source code for my resume, built with Vite, React and Tailwind.

## Features

- Using [Vite](https://vitejs.dev/). Vite is fast. When in development, any edit you make to the any file should be reflected in the browser instantly.

- Separation of content with format. All the resume data is placed in [data.jsx](/setions/data.jsx). All logos are placed in the [`public`](/public/) folder.

- Dark theme.

- Two column A4 layout.

## How to build

1. Clone this repository to your local machine.

    ```shell
    git clone https://github.com/lifeitech/cv-react.git
    ```

2. `cd` to the repository. Install all dependencies by running

    ```shell
    npm install
    ```

3. Run

    ```shell
    npm run dev
    ```

    to start developing. Replace the data in [data.jsx](/setions/data.jsx) with your own info.

4. In the browser, right click the page and click "print" to save the page in PDF. Since we have dark background, be sure to remove any margin by setting the margin to "none" in the print dialog.