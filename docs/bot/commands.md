---
sidebar_position: 1
---

# Commands

Here is a list of all the available commands for the RemoteCord Bot.

- **&lt;argument&gt;**: Means the argument is **required**.

- **[argument]**: Means the argument is **optional**.

| Command                                  | Example                  | Usage                                                                                                                             |
| ---------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **activate**                             | `/activate`              | Activates your account in our database.                                                                                           |
| **add client** _&lt;client-id&gt;_       | `/add-client 1234567989` | Sends a friend request to the desired Client ID.                                                                                  |
| **camera**                               | `/camera`                | Returns a screenshot of the connected Client's webcam.                                                                            |
| **clients**                              | `/clients`               | Returns a list of all friended Clients.                                                                                           |
| **cmd** _&lt;command&gt;_                | `/cmd ping 1.1.1.1`      | Executes a command on the connected Client.                                                                                       |
| **connect**                              | `/connect`               | Returns a list of all friended Clients and allows you to connect to one using a drop-down menu.                                   |
| **current-client**                       | `/current-client`        | Displays the Client you are currently connected to.                                                                               |
| **disconnect**                           | `/disconnect`            | Disconnects you from the Client you are currently connected to.                                                                   |
| **delete-client**                        | `/delete-client`         | Returns a list of all friended Clients and allows you to unfriend one using a drop-down menu.                                     |
| **explorer** _&lt;folder&gt;_            | `/explorer Desktop`      | Displays a list of files from the `folder` argument.                                                                              |
| **get** _&lt;route&gt;_ _&lt;folder&gt;_ | `/get file.exe Desktop`  | Downloads a file from the Client and sends it back.                                                                               |
| **screenshot**                           | `/screenshot`            | Returns a screenshot from the Client. If the client has more than 1 screen, you're allowed to choose which one you'd like to see. |
| **tasks**                                | `/tasks`                 | Returns a list of processes currently executing in the client, ordered by memory usage.                                           |
| **upload** _&lt;file&gt;_                | `/upload hello.png`      | Allows you to upload a file to the Client. The destination can be configured on the Client.                                       |
