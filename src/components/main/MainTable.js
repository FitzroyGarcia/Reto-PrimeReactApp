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
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
import { FileUpload } from "primereact/fileupload";

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

  const cols = [
    { field: "id", header: "ID" },
    { field: "nombre", header: "Nombre" },
    { field: "edad", header: "Edad" },
    { field: "ciudad", header: "Ciudad" },
    { field: "experiencia", header: "Experiencia" },
  ];

  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

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
          label=""
          icon="pi pi-plus"
          severity="success"
          onClick={AbrirNuevoDesarrollador}
          title="Nuevo"
        />
        <Button
          label=""
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmarEliminarSeleccionados}
          title="Eliminar"
          disabled={
            !desarrolladoresSeleccionados ||
            !desarrolladoresSeleccionados.length
          }
          style={{
            opacity:
              desarrolladoresSeleccionados &&
              desarrolladoresSeleccionados.length > 0
                ? 1
                : 0,
          }}
        />
      </div>
    );
  };

  const exportarCSV = () => {
    dt.current.exportCSV();
  };

  const exportarPdf = () => {
    import("jspdf").then((jsPDF) => {
      //jspdf: Permite Generar PDFs en el anvegador
      import("jspdf-autotable").then(() => {
        //jspdf-autotable: Extension que permite utilizar tablas dentro de los PDFs
        const doc = new jsPDF.default(0, 0);

        doc.autoTable(exportColumns, desarrolladores);
        doc.save("products.pdf");
      });
    });
  };

  const barraHerramientasDerecha = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          icon="pi pi-file"
          rounded
          onClick={() => exportarCSV(false)}
          data-pr-tooltip="CSV"
          title="Descargar CSV"
        />
        <Button
          type="button"
          icon="pi pi-file-pdf"
          severity="warning"
          rounded
          onClick={exportarPdf}
          data-pr-tooltip="PDF"
        />
      </div>
    );
  };

  const cabeceraTabla = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Equipo de Programacion</h4>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText
          type="search"
          onInput={(e) => setFiltro(e.target.value)}
          placeholder="Buscar..."
        />
      </IconField>
    </div>
  );

  const plantillaImagen = (rowData) => {
    return (
      <img
        src={rowData.avatar}
        alt={rowData.avatar}
        className="shadow-2 border-round"
        style={{ width: "64px" }}
      />
    );
  };

  const editarDesarrollador = (desarrollador) => {
    setDesarrollador({ ...desarrollador });
    setDesarrolladorDialog(true);
    console.log("Devs", desarrolladores);
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
          title="Editar"
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmarEliminarDesarrollador(rowData)}
          title="Eliminar"
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

  /*const crearId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };*/

  const crearId = () => {
    let numeroLibre = 1;

    const listaIDs = desarrolladores.map(({ id }) => id);
    listaIDs.sort((a, b) => a - b);

    for (const numero of listaIDs) {
      if (numero === numeroLibre) {
        numeroLibre++;
      } else {
        break;
      }
    }
    return numeroLibre;
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
    let _desarrolladores = desarrolladores.filter(
      (val) => !desarrolladoresSeleccionados.includes(val)
    );

    setDesarrolladores(_desarrolladores);
    setEliminarDesarrolladoresDialog(false);
    setDesarrolladoresSeleccionados(null);
    toast.current.show({
      severity: "success",
      summary: "Proceso Exitoso",
      detail: "Desarrolladores Eliminados",
      life: 3000,
    });
  };

  const botonesEliminarDesarrolladores = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={esconderEliminarDesarrolladoresDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={eliminarDesarolladoresSeleccionados}
      />
    </React.Fragment>
  );

  const subirImagen = (e) => {
    const dataImagen = e.files;
    let _desarrollador = { ...desarrollador };

    _desarrollador[`avatar`] = dataImagen[0].objectURL;

    setDesarrollador(_desarrollador);
  };

  return (
    <div style={{ margin: "50px" }}>
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
        <img
          src={desarrollador.avatar}
          alt={desarrollador.avatar}
          className="product-image block m-auto pb-3"
        />
        <FileUpload
          mode="basic"
          accept="image/*"
          maxFileSize={1000000}
          onSelect={subirImagen}
          customUpload
          chooseLabel="Seleccionar archivo"
          style={{ marginBottom: "20px" }}
        />
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
            <span>
              Estas Seguro que deseas eliminar la lista de Desarrolladores?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default MainTable;
