'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reorder } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [items,setItems]=useState([1,2,3,4,5])
  return (
    <main className="bg-slate-600 ">
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item,index)=>(
        <Reorder.Item key={item} value={item}>
        <Card className="m-6">
        <CardHeader>
           <CardTitle className="text-center">
            Item {index}
           </CardTitle>
           <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem tempora nostrum libero totam necessitatibus explicabo voluptate alias, vitae odio doloribus?
            </p>
           </CardContent>
        </CardHeader>
      </Card>
      </Reorder.Item>
      ))}
      </Reorder.Group>
    </main>
  );
}
