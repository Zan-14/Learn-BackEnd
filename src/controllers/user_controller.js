const knex = require("../knexmodel/knex");

const CreateUser = async (req, res) => {
  try {
    const body = req.body;

    const inserData = await knex("users").insert({
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      password: body.password,
      username: body.username,
    });

    return res.status(201).send("success to request");
  } catch (error) {
    console.error(error);
    return res.status(500).send("internal server error");
  }
};

module.exports = { CreateUser };
