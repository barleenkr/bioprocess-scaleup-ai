from pydantic import BaseModel

class ProcessInput(BaseModel):
    organism: str
    reactor_volume: float
    agitation_speed: float
    aeration_rate: float
    temperature: float
    pH: float
    substrate_concentration: float