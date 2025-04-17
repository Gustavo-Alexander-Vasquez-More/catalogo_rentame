import React, { useEffect, useState } from "react";
import {
  Page,
  Document,
  Image,
  View,
  Text,
} from "@react-pdf/renderer";
import logo from "../../images/RENTAME-FICHA_page-0001.jpg";
import banner from "../../images/banner.png";
import axios from "axios";
const FichaTecnica = ({ _id }) => {
  const [loading, setLoading] = useState(null);
  const [datas, setDatas] = useState([]);
  async function get() {
    try {
      const { data } = await axios.get(
        `https://backrecordatoriorenta-production.up.railway.app/api/products/read_especific?_id=${_id}`
      );
      setDatas(data.response);
      setLoading(false); // Datos cargados, actualizamos el estado de carga
    } catch (error) {
      console.error("Error fetching image data:", error);
      setLoading(false); // Si hay un error, dejamos de mostrar el estado de carga
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <Document title={`Ficha tecnica.pdf`}>
      {datas.map((dat) => (
        <Page
          key={dat._id}
          size="A4"
          style={{ position: "relative", marginTop: 20 }}
        >
          <Image
            style={{ width: "100%", position: "absolute" }}
            source={logo}
          />

          <View
            style={{
              position: "absolute",
              top: 95,
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 9,
              color: "white",
              fontFamily: "Helvetica-Bold",
            }}
          >
            <Text>{dat.nombre.toUpperCase()}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 120,
              left: "46.3%",
              height: 209,
              width: "49.5%",
            }}
          >
            <Image
              style={{ width: "100%", objectFit: "container" }}
              src={{ uri: `${dat.foto}`, method: "GET" }}
            />
          </View>
          <Text
            style={{
              fontSize: 11,
              position: "absolute",
              top: "25.8%",
              left: 34,
            }}
          >
            {dat.codigo}
          </Text>
          {dat.precio != "0" && dat.visibilidad_precio === "VISIBLE" && (
            <Text
              style={{
                fontSize: 11,
                position: "absolute",
                top: "30.5%",
                left: 34,
              }}
            >
              ${dat.precio} MXN
            </Text>
          )}
          {(dat.precio === "0" || dat.visibilidad_precio === "NO VISIBLE") && (
            <Text
              style={{
                fontSize: 11,
                position: "absolute",
                top: "30.5%",
                left: 34,
              }}
            >
              PRECIO NO DISPONIBLE
            </Text>
          )}
          {dat.tipo_uso === "venta" && (
            <View
              style={{
                flexDirection: "column",
                fontSize: 8.3,
                top: "32.5%",
                left: "5.7%",
                gap: 2.5,
              }}
            >
              <Text>COSTO VENTA</Text>
              {dat.precio_venta !== "0" && <Text>${dat.precio_venta}</Text>}
              {dat.precio_venta === "0" && <Text>PRECIO NO DISPNIBLE</Text>}
            </View>
          )}

          {/* La descripción ahora fluye automáticamente a otra página si es necesario */}
          <View
            style={{
              marginTop: 340,
              width: "93.35%",
              left: 20,
              padding: 7,
              backgroundColor: "#E6E6E6",
            }}
          >
            <View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
              <Text style={{ fontSize: 13, fontFamily: "Helvetica-Bold" }}>
                DESCRIPCION DEL PRODUCTO
              </Text>
              <Text
                style={{ fontSize: 10, textAlign: "justify", lineHeight: 1.5 }}
              >
                {dat.descripcion.toUpperCase()}
              </Text>
              <Image style={{ width: "100%" }} source={banner} />
            </View>
          </View>
        </Page>
      ))}
    </Document>
  );
};

export default FichaTecnica;
