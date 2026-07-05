export interface Empresa {
  id: string
  nombre: string
  vertical: 'Banco' | 'Aseguradora' | 'Isapre' | 'AFP' | 'Salud' | 'Retail'
  ejecutivosActivos: number
  logoColor: string
}

export const empresas: Empresa[] = [
  { id: 'emp-1', nombre: 'Andes Financiero', vertical: 'Banco', ejecutivosActivos: 128, logoColor: '#5b4fe0' },
  { id: 'emp-2', nombre: 'Continental Seguros', vertical: 'Aseguradora', ejecutivosActivos: 76, logoColor: '#2f6fed' },
  { id: 'emp-3', nombre: 'Isapre Vitalis', vertical: 'Isapre', ejecutivosActivos: 54, logoColor: '#17a06a' },
  { id: 'emp-4', nombre: 'Previsión Sur AFP', vertical: 'AFP', ejecutivosActivos: 39, logoColor: '#c98a12' },
  { id: 'emp-5', nombre: 'Grupo Salud Integral', vertical: 'Salud', ejecutivosActivos: 61, logoColor: '#d64545' },
]
