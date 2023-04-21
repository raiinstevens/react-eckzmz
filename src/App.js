import React, { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export default function NumeralsDemo() {
  const [formGCEmpresa, setFormGCEmpresa] = useState({
    cantTrabajadores: '',
  });

  const [CantidadTrabajadores, setCantidadTrabajadores] = useState('');

  function handleTrabajadores(e) {
    const trabajadores = e.value;
    setCantidadTrabajadores(trabajadores);
    const formattedTrabajadores = trabajadores ? trabajadores.toString() : '';
    setFormGCEmpresa({
      ...formGCEmpresa,
      cantTrabajadores: formattedTrabajadores,
    });
  }
  
  console.log(CantidadTrabajadores);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <InputNumber
          onValueChange={handleTrabajadores}
          maxLength={3}
          useGrouping={false}
          value={CantidadTrabajadores}
          inputId="minmax"
          id="cantTrabajadores"
          name="cantTrabajadores"
          placeholder="000"
          className="ventas"
        />
      </div>
    </div>
  );
}
