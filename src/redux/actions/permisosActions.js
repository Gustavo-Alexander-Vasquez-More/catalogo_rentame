import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const read_AllPermisos = createAsyncThunk("read_AllPermisos", async () => {
  try {
    const { data } = await axios.get(
      "https://backconstanciaschiapas-production.up.railway.app/api/constancias/todos"
    );

    return data.response;
  } catch (error) {}
});
const read_permisos = createAsyncThunk("read_permisos", async (page) => {
  try {
    const { data } = await axios.get(
      `https://backconstanciaschiapas-production.up.railway.app/api/constancias?page=${page}`
    );

    return data;
  } catch (error) {}
});
const read_permisosAuth = createAsyncThunk(
  "read_permisosAuth",
  async (payload) => {
    const { author, page } = payload;
    console.log(author);
    try {
      const { data } = await axios.get(
        `https://backconstanciaschiapas-production.up.railway.app/api/constancias/author?author=${author}&page=${page}`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const create_permisos = createAsyncThunk("create_permisos", async (datos) => {
  try {
    const { data } = await axios.post(
      "https://backconstanciaschiapas-production.up.railway.app/api/constancias/create",
      datos
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Alta creada.",
      showConfirmButton: false,
      timer: 1500,
    });

    return data.response;
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Folio existente!",
      text: "El folio ya existe, por favor genera otra vez un folio!.",
      timer: 1500,
    });
  }
});
const delete_permisos = createAsyncThunk("delete_permisos", async (datitos) => {
  try {
    const { data } = await axios.delete(
      "https://backconstanciaschiapas-production.up.railway.app/api/constancias/delete",
      {
        data: datitos,
      }
    );
    thunkAPI.dispatch(read_admins());
    return data.response;
  } catch (error) {
    return null;
  }
});
const update_permisos = createAsyncThunk(
  "update_permisos",
  async ({ parametro, datos }) => {
    console.log(parametro);
    console.log(datos);
    try {
      const { data } = await axios.put(
        `https://backconstanciaschiapas-production.up.railway.app/api/constancias/update/${parametro}`,
        datos
      );
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "La papeleta se ha rellenado!",
        showConfirmButton: false,
        timer: 1500,
      });

      return data.response;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error.",
      });
    }
  }
);
const permisos_actions = {
  read_permisos,
  create_permisos,
  delete_permisos,
  update_permisos,
  read_AllPermisos,
  read_permisosAuth,
};
export default permisos_actions;
