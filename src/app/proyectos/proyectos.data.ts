export interface Proyecto {
  nombre: string;
  ciudad: string;
  pais: string;
  descripcion: string;
  img: string;
  fotos: number;
  tipo: string;
  desde: string;
  tasa: number;          // % anual
  meses: number;         // plazo en meses
  financiacion: string;
}

export const PROYECTOS: Proyecto[] = [
  {
    nombre: 'Miral Towers', ciudad: 'Buenos Aires', pais: 'Argentina',
    descripcion: 'Miral Towers combina departamentos de diseño contemporáneo con espacios verdes y circulaciones peatonales. Un desarrollo pensado para quienes buscan entrar temprano en un proyecto de alta demanda.',
    img: '/img/proyecto-1.jpg', fotos: 10,
    tipo: 'Apartamentos', desde: 'USD 100', tasa: 18, meses: 3, financiacion: '87% financiado',
  },
  {
    nombre: 'Nova Comfort', ciudad: 'Buenos Aires', pais: 'Argentina',
    descripcion: 'Nova Confort llega a Palermo con departamentos modernos, diseño funcional y amenities pensados para disfrutar la ciudad. Una propuesta residencial con alto potencial en una de las zonas más buscadas de Buenos Aires.',
    img: '/img/proyecto-2.jpg', fotos: 10,
    tipo: 'Apartamentos', desde: 'USD 100', tasa: 18, meses: 12, financiacion: '65% financiado',
  },
  {
    nombre: 'Atria Apartments', ciudad: 'Medellín', pais: 'Colombia',
    descripcion: 'Atria Apartments es un conjunto residencial rodeado de parques y servicios, con unidades flexibles y una ubicación consolidada. Una oportunidad para diversificar fuera de Argentina.',
    img: '/img/proyecto-3.jpg', fotos: 10,
    tipo: 'Apartamentos', desde: 'USD 100', tasa: 18, meses: 3, financiacion: '45% financiado',
  },
];

export const plazo = (p: Proyecto) =>
  p.meses === 12 ? '1 año' : p.meses % 12 === 0 ? `${p.meses / 12} años` : `${p.meses} meses`;

export const ubicacion = (p: Proyecto) => `${p.ciudad}, ${p.pais}`;

export const detalles = (p: Proyecto) => [
  { label: 'Tipo de propiedad', valor: p.tipo },
  { label: 'Desde', valor: p.desde },
  { label: 'Retorno estimado', valor: `${p.tasa}% anual` },
  { label: 'Plazo', valor: plazo(p) },
  { label: 'Financiación', valor: p.financiacion },
];
