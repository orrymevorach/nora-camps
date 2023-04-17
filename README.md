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

To run a Contentful deployment:

1. Create a new environment off of master in Contentful
2. Create and edit content models
3. Use the "Merge" extension to merge in any content model changes from a different branch (note, you will have to give "Merge" access to your new branch)
4. Test the new branch in your local environment by changing the environment variable in your .local.env file to the name matching your new environment
5. If you need to build any content before you make the new environment live in production, do it now
6. When you are ready to deploy, change the `master` alias to the new environment you created
7. Changing the alias does not deploy any branches, so if you need to run a deployment, do so manually in Netlify.
8. In order to keep the development branch live with master, it is a good idea to delete the development branch and re-create it off of master after each deployment.

Contentful Notes:

- The "master" alias is the one that is live in production.
- Changing content in the environment that the master alias is using, will also change content on the live site
- The "development" branch is meant to be a stable branch used striclty by developers. If you have merged changes from a feature branch into master, make sure to also merge them into development, or atlternatively you can delete the existing development branch and re-create it as a duplicate of master
