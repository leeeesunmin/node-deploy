import http from "http";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";
import express, { json } from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = new Server(httpServer);

const handleListen = () => console.log(`Listening on http://localhost:3003`);
httpServer.listen(3003, handleListen);
