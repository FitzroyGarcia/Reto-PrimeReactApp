import React, {
  useEffect,
  useState /*Estados locales del componente*/,
  useRef /*Para referencias de DOM*/,
} from "react";

import { proveedorDesarrolladores } from "../data/desarrolladoresData";
import { classNames } from "primereact/utils";

import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";

import imagen from "../data/images/imagen1.jpg";

function MainTable() {
  let vacioDesarrollador = {
    id: null,
    nombre: "",
    avatar: null,
    edad: 0,
    ciudad: "",
    experiencia: "",
  };

  const toast = useRef(null);
  const dt = useRef(null);

  const [desarrollador, setDesarrollador] =
    useState(vacioDesarrollador); /*Estado de un Desarrollador*/
  const [enviado, setEnviado] =
    useState(false); /*Especifica que si esta cargando algo*/
  const [desarrolladorDialog, setDesarrolladorDialog] =
    useState(
      false
    ); /*Interactua para apertura y cierre de la etiqueta dialog crear*/

  const [desarrolladoresSeleccionados, setDesarrolladoresSeleccionados] =
    useState(
      null
    ); /*Estado que acumula a los desarrolladores seleccionados en la tabla*/
  const [eliminarDesarrolladoresDialog, setEliminarDesarrolladoresDialog] =
    useState(
      false
    ); /*Interactua para apertura y cierre de la etiqueta dialog Eliminar*/
  const [eliminarDesarrolladorDialog, setEliminarDesarrolladorDialog] =
    useState(false);

  const [desarrolladores, setDesarrolladores] =
    useState(
      null
    ); /*Estado donde se encuentra la lista de desarrolladores en la tabla */
  const [filtro, setFiltro] =
    useState(
      null
    ); /**Almacena el filtro o palabra cable para ealizar busquedas en la tabla*/

  useEffect(() => {
    proveedorDesarrolladores
      .getDesarrolladores()
      .then((data) => setDesarrolladores(data));
  }, []);

  const AbrirNuevoDesarrollador = () => {
    setDesarrollador(vacioDesarrollador); /*desarrollador en estado blanco*/
    setEnviado(false);
    setDesarrolladorDialog(true);
  };

  const confirmarEliminarSeleccionados = () => {
    setEliminarDesarrolladoresDialog(true);
  };

  const barraHerramientasIzquierda = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Nuevo"
          icon="pi pi-plus"
          severity="success"
          onClick={AbrirNuevoDesarrollador}
        />
        <Button
          label="Eliminar"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmarEliminarSeleccionados}
          disabled={
            !desarrolladoresSeleccionados ||
            !desarrolladoresSeleccionados.length
          }
        />
      </div>
    );
  };

  const exportarCSV = () => {
    dt.current.exportCSV();
  };

  const barraHerramientasDerecha = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportarCSV}
      />
    );
  };

  const cabeceraTabla = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Equipo de Programacion</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setFiltro(e.target.value)}
          placeholder="Buscar..."
        />
      </span>
    </div>
  );

  const plantillaImagen = (rowData) => {
    console.log(rowData);
    return (
      <img
        src={`../data/images/${rowData.avatar}`}
        alt={rowData.avatar}
        className="shadow-2 border-round"
        style={{ width: "64px" }}
      />
    );
  };

  const editarDesarrollador = (desarrollador) => {
    setDesarrollador({ ...desarrollador });
    setDesarrolladorDialog(true);
  };

  const confirmarEliminarDesarrollador = (desarrollador) => {
    setDesarrollador(desarrollador);
    setEliminarDesarrolladorDialog(true);
  };

  const plantillaEventos = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => editarDesarrollador(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmarEliminarDesarrollador(rowData)}
        />
      </React.Fragment>
    );
  };

  const esconderDialog = () => {
    setEnviado(false);
    setDesarrolladorDialog(false);
  };

  const guardarProgramador = () => {
    setEnviado(true);

    if (desarrollador.nombre.trim()) {
      let crearDesarrolladores = [...desarrolladores];
      let crearDesarrollador = { ...desarrollador };

      if (desarrollador.id) {
        const index = EncontrarIndexPorID(desarrollador.id);

        crearDesarrolladores[index] = crearDesarrollador;
        toast.current.show({
          severity: "success",
          summary: "Proceso Exitoso",
          detail: "Desarrollador Actualizado",
          life: 3000,
        });
      } else {
        crearDesarrollador.id = crearId();
        crearDesarrollador.avatar = "product-placeholder.svg";
        crearDesarrolladores.push(crearDesarrollador);
        toast.current.show({
          severity: "success",
          summary: "Proceso Exitoso",
          detail: "Desarrollador Creado",
          life: 3000,
        });
      }

      setDesarrolladores(crearDesarrolladores);
      setDesarrolladorDialog(false);
      setDesarrollador(vacioDesarrollador);
    }
  };

  const botonesDesarrollador = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        outlined
        onClick={esconderDialog}
      />
      <Button label="Save" icon="pi pi-check" onClick={guardarProgramador} />
    </React.Fragment>
  );

  const EncontrarIndexPorID = (id) => {
    let index = -1;

    for (let i = 0; i < desarrolladores.length; i++) {
      if (desarrolladores[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  };

  const crearId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  const modificarEntrada = (e, nombreAtributo) => {
    const valor = (e.target && e.target.value) || "";
    let _desarrollador = { ...desarrollador };

    _desarrollador[`${nombreAtributo}`] = valor;

    setDesarrollador(_desarrollador);
  };

  const modificarEntradaNumero = (e, nombreAtributo) => {
    const val = e.value || 0;
    let _desarrollador = { ...desarrollador };

    _desarrollador[`${nombreAtributo}`] = val;

    setDesarrollador(_desarrollador);
  };

  const esconderEliminarDesarrolladorDialog = () => {
    setEliminarDesarrolladorDialog(false);
  };

  const eliminarDesarrollador = () => {
    let _desarrolladores = desarrolladores.filter(
      (val) => val.id !== desarrollador.id
    );

    setDesarrolladores(_desarrolladores);
    setEliminarDesarrolladorDialog(false);
    setDesarrollador(vacioDesarrollador);
    toast.current.show({
      severity: "success",
      summary: "Proceso Exitoso",
      detail: "Desarrollador Eliminado",
      life: 3000,
    });
  };

  const botonesEliminarDesarrollador = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={esconderEliminarDesarrolladorDialog}
      />
      <Button
        label="Si"
        icon="pi pi-check"
        severity="danger"
        onClick={eliminarDesarrollador}
      />
    </React.Fragment>
  );

  const esconderEliminarDesarrolladoresDialog = () => {
    setEliminarDesarrolladoresDialog(false);
};

const eliminarDesarolladoresSeleccionados = () => {
  let _desarrolladores = desarrolladores.filter((val) => !desarrolladoresSeleccionados.includes(val));

  setDesarrolladores(_desarrolladores);
  setEliminarDesarrolladoresDialog(false);
  setDesarrolladoresSeleccionados(null);
  toast.current.show({ severity: 'success', summary: 'Proceso Exitoso', detail: 'Desarrolladores Eliminados', life: 3000 });
};


  const botonesEliminarDesarrolladores = (
    <React.Fragment>
        <Button label="No" icon="pi pi-times" outlined onClick={esconderEliminarDesarrolladoresDialog} />
        <Button label="Yes" icon="pi pi-check" severity="danger" onClick={eliminarDesarolladoresSeleccionados} />
    </React.Fragment>
);

  return (
    <div>
      <Toast ref={toast} />
      {/*Permite crear notificaciones o pequeños mensajes*/}

      <div className="card">
        <Toolbar
          className="mb-4"
          left={barraHerramientasIzquierda}
          right={barraHerramientasDerecha}
        ></Toolbar>
        {/*Barra para agrupar de Botones*/}

        <DataTable
          ref={dt} /*-------------- */
          value={
            desarrolladores
          } /*Array de objetos que se mostraran en la tabla*/
          selection={
            desarrolladoresSeleccionados
          } /*Array en el que se acumularan los objetos que se seleccionen en la tabla*/
          onSelectionChange={(e) =>
            setDesarrolladoresSeleccionados(e.value)
          } /*Funcion que se ejecutara cuando se seleccione una fila de la tabla*/
          dataKey="id" /*Nombre de la propiedad de cada objeto que servira como identificador(En este caso el ID) */
          paginator /*Permite realizar paginas en la tabla */
          rows={10} /**Numero de filas por pagina */
          rowsPerPageOptions={[
            5, 10, 25,
          ]} /**Array que especifica cuantas filas el cliente puede configurar que le muestre por pagina*/
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          globalFilter={
            filtro
          } /**Filtro para especificar la palabra clave de busqueda en la tabla*/
          header={
            cabeceraTabla
          } /**Determina una estructura como cabecera de la tabla */
        >
          <Column selectionMode="multiple" exportable={false}></Column>
          {/**Columna de CheckBox para seleccionar*/}
          <Column
            field="id"
            header="Id"
            sortable
            style={{ minWidth: "16rem" }}
          ></Column>
          <Column
            field="avatar"
            header="Avatar"
            body={plantillaImagen}
          ></Column>
          <Column
            field="nombre"
            header="Nombre"
            sortable
            style={{ minWidth: "16rem" }}
          ></Column>
          <Column
            field="edad"
            header="Edad"
            sortable
            style={{ minWidth: "16rem" }}
          ></Column>
          <Column
            field="ciudad"
            header="Ciudad"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="experiencia"
            header="Experiencia"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>

          <Column
            body={plantillaEventos}
            exportable={false}
            style={{ minWidth: "12rem" }}
          ></Column>
        </DataTable>
      </div>

      <Dialog
        visible={desarrolladorDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Datos Desarrollador"
        modal
        className="p-fluid"
        footer={botonesDesarrollador}
        onHide={esconderDialog}
      >
        {/*desarrollador.avatar && (
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.image}
            className="product-image block m-auto pb-3"
          />
        )*/}
        <div className="field">
          <label htmlFor="nombre" className="font-bold">
            Nombre
          </label>
          <InputText
            id="nombre"
            value={desarrollador.nombre}
            onChange={(e) => modificarEntrada(e, "nombre")}
            required
            autoFocus
            className={classNames({
              "p-invalid": enviado && !desarrollador.name,
            })}
          />
          {enviado && !desarrollador.name && (
            <small className="p-error">El Nombre es requerido.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="experiencia" className="font-bold">
            Experiencia
          </label>
          <InputTextarea
            id="experiencia"
            value={desarrollador.experiencia}
            onChange={(e) => modificarEntrada(e, "experiencia")}
            required
            rows={3}
            cols={20}
          />
        </div>

        <div className="formgrid grid">
          <div className="field">
            <label htmlFor="ciudad" className="font-bold">
              Ciudad
            </label>
            <InputText
              id="ciudad"
              value={desarrollador.ciudad}
              onChange={(e) => modificarEntrada(e, "ciudad")}
              required
            />
          </div>
          <div className="field col">
            <label htmlFor="edad" className="font-bold">
              Edad
            </label>
            <InputNumber
              id="edad"
              value={desarrollador.edad}
              onValueChange={(e) => modificarEntradaNumero(e, "edad")}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        visible={eliminarDesarrolladorDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Eliminar Desarrollador"
        modal
        footer={botonesEliminarDesarrollador}
        onHide={esconderEliminarDesarrolladorDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {desarrollador && (
            <span>
              ¿Estas seguro que quieres eliminar el elemento{" "}
              <b>{desarrollador.nombre}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={eliminarDesarrolladoresDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Eliminar Desarrolladores"
        modal
        footer={botonesEliminarDesarrolladores}
        onHide={esconderEliminarDesarrolladoresDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {desarrollador && (
            <span>Estas Seguro que deseas eliminar la lista de Desarrolladores?</span>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default MainTable;

/*import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function MainTable() {
  const data = [
    {
      id: 1,
      nombre: "JOSE",
      edad: 30,
      ciudad: "CUSCO",
    },
    {
      id: 2,
      nombre: "HERBERTH",
      edad: 26,
      ciudad: "PAUCARTAMBO",
    },
    {
      id: 3,
      nombre: "JOEL",
      edad: 25,
      ciudad: "URUBAMBA",
    },
    {
      id: 4,
      nombre: "ERNESTO",
      edad: 27,
      ciudad: "CALCA",
    },
  ];

  return (
    <div className="">
      <Button label="Crear" rounded />
      <DataTable value={data}>
        <Column field="id" header="ID" />
        <Column field="nombre" header="Nombre" />
        <Column field="edad" header="Edad" />
        <Column field="ciudad" header="Ciudad" />
        <Column header="Ver" />
        <Column header="Editar" />
        <Column header="Eliminar" />
        <Column headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
      </DataTable>
    </div>
  );
}



export default MainTable;*/
