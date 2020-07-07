/** Configurações vindo do server.js */
const app = require("./config/server");

const server = app.listen(3000, function () {
    console.log("Servidor ON");
});

/** Onde o Socket.io irá escutar -> Nesse caso sera a mesma porta que o server
 *  Dois protocolos diferentes na mesma porta.
 */
const io = require("socket.io").listen(server);

/** Cria uma variável de Escopo Global */
app.set("io", io);

/* Conexão por WebSocket */
io.on("connection", function (socket) {
    socket.on("disconnect", function () {});

    socket.on("msgParaServidor", function (data) {
        /** Dialogos */

        socket.emit("msgParaCliente", data);
        socket.broadcast.emit("msgParaCliente", data);

        /** Participantes */

        socket.emit("participantesParaCliente", data.apelido);
        socket.broadcast.emit("participantesParaCliente", data.apelido);
    });
});
