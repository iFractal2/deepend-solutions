import React from 'react'

const services = [
  { key:'replaster', title:'Replaster/Resurface' },
  { key:'mastic', title:'Mastic' },
  { key:'coping', title:'Coping' },
  { key:'tile', title:'Tile' },
  { key:'decks', title:'Pool Decks' },
  { key:'features', title:'Water features' },
  { key:'rails', title:'Handrails/Fences' },
  { key:'turf', title:'Turf' },
  { key:'inspections', title:'Inspections/Leak Detections' }
]

export default function Services() {
  return (
    <div className="services-grid">
      {services.map(s => (
        <a key={s.key} className="service-card" href="#" data-service={s.key}>
          <img
            className="service-img"
            src={`/images/service_${s.key}.jpg`}
            alt={s.title}
            onError={(e)=>{ e.currentTarget.style.background='linear-gradient(180deg,#0a0f17,#0f1623)'; e.currentTarget.src='' }}
          />
          <div className="service-title">
            {s.title} <span>Learn more →</span>
          </div>
        </a>
      ))}
    </div>
  )
}
