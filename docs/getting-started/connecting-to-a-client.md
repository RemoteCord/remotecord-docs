---
sidebar_position: 2
---

# Connecting to a Client

This is how to establish a connection between a **Client app** and the **Discord bot**.

## Client App

:::info
If you haven't already, make sure you've **logged in with Google** in the Client App.
:::
Once you've completed all [Installation](/docs/getting-started/installation) steps, you should see a screen like this:

The ID visible at the top of the screen is your **Client ID**. This number is not secret & can be shared around if needed. Have this number ready for the following steps.

## RemoteCord Bot

To connect to a Client from the bot, you first need to have them added as a friend.

1. Run `/add-client <clientID>` to send a friend request to your client.
2. From the **Client App**, accept this request.
3. Run `/clients` and you should see your client's Name and ID in your friends list.

Now that this is set up, we can establish our first connection.

1. Run `/connect` and select your client from the drop-down list.
2. From the **Client App**, accept this request.
   - The client will need to **manually accept every incoming connection request**. This behavior can be changed in the **Client Settings**!
3. Run `/current-client`. You should see your client's name appear.
