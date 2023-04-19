<h1 align="center">
 Nora Camps
</h1>

This site was built using Next.JS

1.  **Start dev server**

    Navigate into your new site’s directory and start it up.

    ```
    npm run dev
    ```

2.  **Open the code and start customizing!**

    Your site is now running at http://localhost:3000!

3.  **Deployments**

To deploy code to production, create a PR and merge it into master

Contentful workflow and deployments:

- The `master` environment in Contentful will always be stable. If you are not working in Contentful, make sure the NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT in your .env.local file is set to `master`.

To add/edit content models without affecting master or other people's work:

1. Create a new environment off of master in Contentful, name it off of your feature. I.e. `add-painting-content-model`.
2. While you are still on the `master` branch in Contentful, go to API keys, select the production key, and check the checkbox of your new environment to ensure that your new environment can pull data.
3. In Contentful, switch to your new branch, and make changes to content models and content entries.

To make your Content Model changes live:

1. Create a new Contentful environment off of `master`, and name it with the current date. I.e. master-2023-04-16.

- This makes sure all of the content entries are up to date with what is currently in production
- This also allows us to revert back to the original master, in the case that there is an issue with out deploymeny

2. Use the "Merge" extension to merge content model changes. Set the source branch as your feature environment, and the target branch as the new master branch you just created.
3. Test your changes:

- In git, switching to your feature branch
- Change the environment variable in your .local.env file to the new master environment you created
- View all pages that will be affected and test the functionality to make sure it is as you expect

4. If all your changes are tested and ready, merge your feature branch into master in git.
5. While the Netlify deployment is under way with the latest code changes, change the `master` alias in Contenful to the new master environment you created.

Contentful Notes:

- The "master" alias is the one that is live in production.
- Changing content in the environment that the master alias is using, will also change content on the live site
