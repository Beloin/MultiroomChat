module.exports.chat = function (application, req, res) {
    const dadosForm = req.body;
    console.log(dadosForm);

    req.assert("apelido", "Nome não pode ser vazio").notEmpty();
    req.assert("apelido", "Nome tem que ser entre 3 a 15 caracterers").len(
        3,
        15
    );

    const errors = req.validationErrors();
    if (errors) {
        res.render("index", { validacao: errors });
        return;
    }

    res.render("chat");
};
