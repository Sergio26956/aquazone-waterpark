"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" import GaleriaFlotante from "@/components/galeria/GaleriaFlotante" import GaleriaUrbano from "@/components/galeria/GaleriaUrbano" import GaleriaTerrestre from "@/components/galeria/GaleriaTerrestre" import GaleriaKamikaze from "@/components/galeria/GaleriaKamikaze"

export default function GaleriaPublica() { return ( <section className="w-full min-h-screen px-4 md:px-20 py-10 bg-blue-950 text-white"> <h2 className="text-4xl font-bold text-center mb-10 drop-shadow-md"> Galería de Atracciones </h2> <Tabs defaultValue="flotante" className="w-full"> <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-blue-800 rounded-xl shadow-inner"> <TabsTrigger value="flotante">Parques Flotantes</TabsTrigger> <TabsTrigger value="urbano">Parques Urbanos</TabsTrigger> <TabsTrigger value="terrestre">Parques Terrestres</TabsTrigger> <TabsTrigger value="kamikaze">Kamikaze Jump</TabsTrigger> </TabsList>

<TabsContent value="flotante" className="mt-8">
      <GaleriaFlotante />
    </TabsContent>
    <TabsContent value="urbano" className="mt-8">
      <GaleriaUrbano />
    </TabsContent>
    <TabsContent value="terrestre" className="mt-8">
      <GaleriaTerrestre />
    </TabsContent>
    <TabsContent value="kamikaze" className="mt-8">
      <GaleriaKamikaze />
    </TabsContent>
  </Tabs>
</section>

) }

