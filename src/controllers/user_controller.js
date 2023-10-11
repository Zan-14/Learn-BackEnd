const { response } = require("express");
const knex = require("../knexmodel/knex");
const { user } = require("../models");
const validator = require("validator");
const crypt = require("bcrypt");

const CreateUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, username } = req.body;

    // const inserData = await knex("users").insert({
    //   firstname: body.firstname,
    //   lastname: body.lastname,
    //   email: body.email,
    //   password: body.password,
    //   username: body.username,
    // });

    if (!firstname || !lastname || !email || !password || !username) {
      return res.status(400).send({
        message: "something is missing",
      });
    }

    const strongPassword = validator.isStrongPassword(password);
    if (!strongPassword)
      return res.status(400).send({ message: "password is weak" });

    const hashedPwd = crypt.hashSync(password, 8);

    const insert = await user.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPwd,
      username: username,
    });

    return res.status(201).send({
      message: "Creating user is success",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("internal server error");
  }
};

const GetUsers = async (req, res) => {
  try {
    const allUsers = await knex.select().from("users");

    return res.status(200).send({
      message: "success to get data",
      allUsers,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("internal server error");
  }
};

const UpdateUser = async (req, res) => {
  try {
    const body = req.body;

    const updated = await knex("users")
      .where({ username: body.username })
      .update({ firstname: body.firstname });
    console.log(updated);

    return res.status(200).send({
      message: "success to update",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("internal server error");
  }
};

const DeleteUser = async (req, res) => {
  try {
    const body = req.body;

    const deleted = await knex("users").where({ id: body.id }).del();
    console.log(deleted);

    if (!deleted)
      return res.status(404).send({
        message: "Data not found, delete failed",
      });

    return res.status(200).send({
      message: "success to delete",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("internal server error");
  }
};

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send({
        message: "username and password is required",
      });
    }

    const getUser = await user.findOne({ where: { username: username } });
    if (!user) {
      return res.status(404).send({
        message: "user not found",
      });
    }
    console.log(getUser);

    const isValidPassword = crypt.compareSync(
      password,
      getUser.dataValues.password
    );
    if (!isValidPassword) {
      return res.status(404).send({
        message: "password is invalid",
      });
    }

    return res.status(200).send({ message: "login success" });
  } catch (error) {
    console.error(error);
    return res.status(500).send("internal server error");
  }
};

module.exports = { CreateUser, GetUsers, UpdateUser, DeleteUser, Login };
