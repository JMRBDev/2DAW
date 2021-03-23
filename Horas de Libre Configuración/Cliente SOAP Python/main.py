from zeep import Client

cliente = Client(wsdl="http://localhost:2021/soap/Persona?wsdl")


def mostrarMenu():
    print("""
    ### PERSONAS ###
1.- Insertar
2.- Listar
3.- Listar una
4.- Modificar
5.- Eliminar
    """)


def comprobarInput(valor):
    if (valor.strip().isdigit()):
        return True
    else:
        return False


def insertar(datos):
    try:
        cliente.service.insertar(
            datos["dni"], datos["nombre"], datos["edad"], datos["nacionalidad"])
        print("\nDatos insertados con éxito")
    except:
        print("\nError en la inserción de datos")


def listar():
    try:
        result = cliente.service.listar()
        for i, persona in enumerate(result):
            print(
                f"{i+1} ➡️ DNI: {persona['dni']}, Nombre: {persona['nombre']}, Edad: {persona['edad']}, Nacionalidad: {persona['nacionalidad']['nombre']}")
    except:
        print("Error en el listado de datos")


def listarUno(dni):
    try:
        result = cliente.service.listarUno(dni)
        print(
            f"Persona ➡️ DNI: {result['dni']}, Nombre: {result['nombre']}, Edad: {result['edad']}, Nacionalidad: {result['nacionalidad']['nombre']}")
    except:
        print("Error listando una persona con DNI:", dni)


def modificar(datos):
    try:
        cliente.service.modificar(
            datos["dni"], datos["nombre"], datos["edad"], datos["nacionalidad"])
        print("\nDatos modificados con éxito")
    except:
        print("\nError en la modificación de datos")


def eliminar(dni):
    result = cliente.service.eliminar(dni)

    if result:
        print("\nDatos eliminados con éxito")
    else:
        print("\nError en la eliminación de datos")


if __name__ == "__main__":
    while True:
        mostrarMenu()

        seleccion = input("Elija una opción: ")

        if comprobarInput(seleccion):
            seleccion = int(seleccion)

            if seleccion == 1:
                insertar(
                    {"dni": input("DNI: "),
                     "nombre": input("Nombre: "),
                     "edad": input("Edad: "),
                     "nacionalidad": input("Nacionalidad: "),
                     }
                )

            elif seleccion == 2:
                listar()

            elif seleccion == 3:
                listarUno(input("DNI: "))

            elif seleccion == 4:
                modificar(
                    {"dni": input("DNI: "),
                     "nombre": input("Nuevo nombre (vacío para no modificar): "),
                     "edad": input("Nueva edad (vacío para no modificar): "),
                     "nacionalidad": input("Nueva nacionalidad (vacío para no modificar): "),
                     }
                )

            elif seleccion == 5:
                eliminar(input("DNI: "))

            else:
                print("Not implemented yet")
