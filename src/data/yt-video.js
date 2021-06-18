const data = {
  title: 'App runtime - Queries and mutations',
  video: {
    type: 'HTML5',
    url: 'videos/app-runtime.mp4',
    duration: 1382
  },
  contents: [
    {
      title: 'Introduction',
      timestamp: 0,
      content: `
        ### Useful links:

        * YouTube link: [https://www.youtube.com/watch?v=dnagTunwHls](https://www.youtube.com/watch?v=dnagTunwHls)
        * [Presentation slides](https://drive.google.com/file/d/1hQfQ3kIbUT8BcpkprKmtbRMvMUmxF2rV/view?usp=sharing) (wrong link, actual presentation is not public)
        * [@dhis2/app-runtime documentation](https://runtime.dhis2.nu/)

        ### Differences between a query and a mutation:

        > Question:
        > > I'm reading GraphQL Docs about Query and Mutation. However, there is a lack
        > > of real examples which shows the difference and most importantly — when is
        > > it appropriate to use them.
        >
        > Answer
        > > ## Short
        > > Conventionally:
        > >
        > > Query — for querying data (SELECT operations)  
        > > Mutation — for creating new and updating/deleting existing data
        > > (INSERT, UPDATE, DELETE)
        > 
        > Source: [https://stackoverflow.com/a/52551263](https://stackoverflow.com/a/52551263)

        ### Query dhis2 documentation:
        [https://runtime.dhis2.nu/#/types/Query](https://runtime.dhis2.nu/#/types/Query)

        ### Mutation dhis2 documentation
        [https://runtime.dhis2.nu/#/types/Mutation](https://runtime.dhis2.nu/#/types/Mutation)
      `,
    },
    {
      title: 'Mutations',
      timestamp: 58,
      content: `
        [This article](https://shopify.dev/concepts/graphql/mutations) by shopify
        explains what a mutation is in REST-Api language. The original terminology has
        been created by the graphql team, but it applies to the dhis2 app-runtime as
        well.
      `,
    },
    {
      title: 'Playground',
      timestamp: 100,
      content: `
        * [Here](https://runtime.dhis2.nu/playground/) you can find the playground for
          queries and mutations (you can also open it by clicking the "Open Playground"
          button at the top of the navigation of the [app-runtime
          documentation](https://runtime.dhis2.nu/))
      `,
    },
    {
      title: 'Update introduction of the current user',
      timestamp: 140,
      content: `
        The following mutation will be prefilled automatically when changing the type
        for "Mutation" if the content has not been edited:

        ~~~json
        {
            "resource": "me",
            "type": "update",
            "data": {
                "introduction": "Hello, World!"
            }
        }
        ~~~
      `,
    },
    {
      title: 'Reading current user information',
      timestamp: 160,
      content: `
        The following query will be prefilled automatically when creating a new query
        tab or when changing the type for "Query" if the content has not been edited:

        ~~~json
        {
            "me": {
                "resource": "me",
                "params": {
                    "fields": [
                        "id",
                        "name",
                        "email",
                        "introduction"
                    ]
                }
            }
        }
        ~~~
      `,
    },
    {
      title: 'Getting data to create visalization mutation',
      timestamp: 310,
      content: `
        ### Query to read all visualizations

        ~~~json
        {
          "visualizations": {
            "resource": "visualizations",
            "params": {
              "fields": [
                "*"
              ]
            }
          }
        }
        ~~~

        ### Query to read a specific visualizations by id

        This is a query that will get a SINGLE_VALUE visualiziation will all fields
        that are required to create one:

        ~~~json
        {
          "visualizations": {
            "resource": "visualizations",
            "id": "[Your viz id here]",
            "params": {
              "fields": [
                "name",
                "type"
              ]
            }
          }
        }
        ~~~

        ### Query to read all SINGLE_VALUE visualizations

        This is a query that will get a SINGLE_VALUE visualiziation will all fields
        that are required to create one:

        ~~~json
        {
          "visualizations": {
            "resource": "visualizations",
            "params": {
              "filter": "type:eq:SINGLE_VALUE",
              "fields": [
                "name",
                "type"
              ]
            }
          }
        }
        ~~~
      `,
    },
    {
      title: 'Count feature',
      timestamp: 9*60+20,
      content: `
        Currently the app-runtime does not have feature support to retrieve a count
        information similar to what COUNT would do in a SQL query.

        * [Dhis2 docs](https://docs.dhis2.org)

        # 12:25 - Two ways to use the playground with your instance

        ### First option

        * Go to the system settings app
        * Add the https://runtime.dhis2.org url to the allowed urls under the
          "Access" tab

        ### Second option

        * Go to the app management app
        * Navigate to "App hub"
        * Search for "playground"
        * Install the "Data Query Playground" app
      `,
    },
    {
      title: 'Creating a visualization',
      timestamp: 13*60+48,
      content: `
        The following mutation that will get a SINGLE_VALUE visualiziation. It will
        only provide the necessary information to be able to create one, it is not
        working yet though:

        ~~~json
        {
          "resource": "visualizations",
          "type": "create",
          "params": {
            "name": "I am not a test",
            "type": "SINGLE_VALUE"
          }
        }
        ~~~

        The response of the mutation contains the information about whether the
        creation has been successful. The status code 201 indicates that it was
        successful. Furthermore the request also contains the uid of the newly
        created visualization, which could be used to update displayed data until an
        actual query responds to verify & update the latest data.

        The query to retrieve the data of the newly created visualization by name looks
        like this:

        ~~~json
        {
          "visualizations": {
            "resource": "visualizations",
            "params": {
              "filters": [
                "type:eq:SINGLE_VALUE",
                "displayName:eq:I am not a test"
              ]
            }
          }
        }
        ~~~

        To get all visualizations that have a certain pattern in their displayName,
        the following query can be used with the $ilike matcher in the filter value
        for the displayName:

        ~~~json
        {
          "visualizations": {
            "resource": "visualizations",
            "params": {
              "filters": [
                "type:eq:SINGLE_VALUE",
                "displayName:$ilike:I am not a test"
              ]
            }
          }
        }
        ~~~
      `,
    },
    {
      title: 'Updating a visualization partially',
      timestamp: 17*60+25,
      content: `
        In order to update a visualization the value of type needs to be update. To
        be able to update only specified fields, partial: true can be provided to the
        mutation itself, which allows us to not having to provide all values that are
        attached to the data.

        ~~~json
        {
          "resource": "[resource here]",
          "id": "[Your id here]",
          "type": "update",
          "partial": true,
          "params": {
            "name": "I am a test",
          }
        }
        ~~~

        Unfortunately not all endpoints support partial: true, like the
        visualizations endpoint. This means that all values attached to the
        visualization need to be send alongside the updated values:

        ~~~json
        {
          "resource": "visualizations",
          "id": "[Your id here]",
          "type": "update",
          "params": {
            "name": "I am not a test",
            "type": "SINGLE_VALUE"
          }
        }
        ~~~

        When the request is successful, the response should contain a 200 status code
        (unlike the create mutation, which should respond with 201). Similarly to the
        create mutation, the response of the update mutation also contains the id of
        the created object.
      `,
    },
    {
      title: 'Deleting a visualization',
      timestamp: 19*60+22,
      content: `
        To delete data, no parameters need to be provided. It suffices to provide
        type: "delete" and the id of the data you want to delete:

        ~~~json
        {
          "resource": "visualizations",
          "id": "[Your id here]",
          "type": "delete"
        }
        ~~~

      `,
    },
    {
      title: 'Creating data with an existing value for a unique field',
      timestamp: 21*60+12,
      content: `
        When supplying a value to a field that's unique but there's already data with
        the specified value, the endpoint will respond with an error and status code
        409.

        The response will also contain a more detailed description of why the operation
        was not successful, in this case: found matching object for given reference,
        but import mode is CREATE. Identifier was UID, and object was I am a test
        [fPMi6rAB6D4] (Visualizations).
      `,
    },
  ]
}

export default data
