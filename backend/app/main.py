from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="API - CRUD de Certificaciones")

# Configuración para que la app móvil se conecte
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#MODELO DE DATOS
class Certificacion(BaseModel):
    id: int
    nombre: str
    institucion: str
    anio: int

#BASE DE DATOS SIMULADA
certificaciones_db = [
    Certificacion(id=1, nombre="Lean Six Sigma Black Belt", institucion="ASQ", anio=2024),
    Certificacion(id=2, nombre="PMP - Project Management", institucion="PMI", anio=2023),
    Certificacion(id=3, nombre="IATF 16949:2016 Lead Auditor", institucion="SGS", anio=2022)
]

#CRUD COMPLETO

#Obtener todas las certificaciones
@app.get("/api/certificaciones", response_model=List[Certificacion], tags=["Certificaciones"])
def obtener_certificaciones():
    return certificaciones_db

#Agregar una nueva
@app.post("/api/certificaciones", response_model=Certificacion, tags=["Certificaciones"])
def crear_certificacion(cert: Certificacion):
    for item in certificaciones_db:
        if item.id == cert.id:
            raise HTTPException(status_code=400, detail="Ya existe una certificación con ese ID.")
    
    certificaciones_db.append(cert)
    return cert

#Editar una certificación existente
@app.put("/api/certificaciones/{cert_id}", response_model=Certificacion, tags=["Certificaciones"])
def actualizar_certificacion(cert_id: int, cert_actualizada: Certificacion):
    for index, item in enumerate(certificaciones_db):
        if item.id == cert_id:
            certificaciones_db[index] = cert_actualizada
            return cert_actualizada
            
    raise HTTPException(status_code=404, detail="Certificación no encontrada.")

@app.delete("/api/certificaciones/{cert_id}", tags=["Certificaciones"])
def eliminar_certificacion(cert_id: int):
    for index, item in enumerate(certificaciones_db):
        if item.id == cert_id:
            certificaciones_db.pop(index)
            return {"mensaje": f"Certificación con ID {cert_id} eliminada correctamente."}
            
    raise HTTPException(status_code=404, detail="Certificación no encontrada.")