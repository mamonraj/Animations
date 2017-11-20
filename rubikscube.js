{
    function createcube()
    {
        // The outline is to guide the original axial directions. //
        
        geo = new THREE.CubeGeometry(30,30,30)
        mat = new THREE.MeshNormalMaterial( { color: 0x550055, opacity: 1, transparent: true, wireframe: true } );
        outline = new THREE.Mesh(geo, mat);
        outline.position.set(10,10,0);

        axes = new THREE.BoxHelper( outline ); //  good for cubes. //
        axes.material.color.set( 0xff00ff );
        scene.add( axes );
      
        geo = new THREE.SphereGeometry( 1,30,30);
        mat = new THREE.MeshNormalMaterial( { color: 0xff0000, opacity: 1, transparent: true, wireframe: false } );
        bob = new THREE.Mesh(geo, mat);
        bob.position.set(-15,15,-15);
        scene.add(bob);
        
        geo = new THREE.CylinderGeometry( 0.5,0,2,30,30);
        mat = new THREE.MeshNormalMaterial( { color: 0xff0000, opacity: 1, transparent: true, wireframe: false } );
        arrow = new THREE.Mesh(geo, mat);
        arrow.position.set(-5,15,-15);
        arrow.rotation.z = 1.5;
        scene.add(arrow);
        
        geo = new THREE.CylinderGeometry( 0.5,0,2,30,30);
        mat = new THREE.MeshNormalMaterial( { color: 0xff0000, opacity: 1, transparent: true, wireframe: false } );
        arrow = new THREE.Mesh(geo, mat);
        arrow.position.set(-15,5,-15);
        scene.add(arrow);
        
        geo = new THREE.CylinderGeometry( 0,0.5,2,30,30);
        mat = new THREE.MeshNormalMaterial( { color: 0xff0000, opacity: 1, transparent: true, wireframe: false } );
        arrow = new THREE.Mesh(geo, mat);
        arrow.position.set(-15,15,-5);
        arrow.rotation.x = 1.5;
        scene.add(arrow);
      
        // These are letters with text geometry //
        
         thetext = "X";
         text3d = new THREE.TextGeometry( thetext, { size: 1, height: 0.5, curveSegments: 2, font: "helvetiker" });
         mat = new THREE.MeshNormalMaterial( { color: Math.random() * 0xffffff, overdraw: true } );
         text = new THREE.Mesh( text3d, mat );
         text.doubleSided = false;
         text.position.set(0, 16, -15);
         scene.add(text); 
         
         thetext = "Y";
         text3d = new THREE.TextGeometry( thetext, { size: 1, height: 0.5, curveSegments: 2, font: "helvetiker" });
         mat = new THREE.MeshNormalMaterial( { color: Math.random() * 0xffffff, overdraw: true } );
         text = new THREE.Mesh( text3d, mat );
         text.doubleSided = false;
         text.position.set(-15, 0, -15);
         scene.add(text); 
         
         thetext = "Z";
         text3d = new THREE.TextGeometry( thetext, { size: 1, height: 0.5, curveSegments: 2, font: "helvetiker" });
         mat = new THREE.MeshNormalMaterial( { color: Math.random() * 0xffffff, overdraw: true } );
         text = new THREE.Mesh( text3d, mat );
         text.doubleSided = false;
         text.position.set(-15, 15, 0);
         scene.add(text); 
        
        // end of letters with text geometry //
        
        
        // end of guide outline.  //
              
        var k = 0;
        
        rubikscube = new THREE.Object3D();
        rubikscube.position.set(0,0,0);
        scene.add(rubikscube);
                 
        for(k = 0; k < 27;k++ )
        {    
            geometry = new THREE.CubeGeometry( 5, 5, 5);
            
            sides = [
                       new THREE.MeshBasicMaterial( { color: 0xdddddd } ),  
                       new THREE.MeshBasicMaterial( { color: 0xff9900 } ), 
                       new THREE.MeshBasicMaterial( { color: 0x00dd00 } ),  
                       new THREE.MeshBasicMaterial( { color: 0x99ccff } ),  
                       new THREE.MeshBasicMaterial( { color: 0xff66dd } ),  
                       new THREE.MeshBasicMaterial( { color: 0xdddd00 } ) 
                    ];

            material = new THREE.MeshFaceMaterial(sides); 
            mesh = new THREE.Mesh(geometry,  material);
            cube.push(mesh);
            scene.add(mesh);
       }    
            
       // before setting the cubes add black squares on all 6 sides of each cube. //
       
       for(k = 0; k < 27;k++ )
       {  
            geo = new THREE.TorusGeometry( 3,0.3,4,4);
            mat = new THREE.MeshLambertMaterial( { color: 0x884400, opacity: 1, transparent: true, wireframe: false } );
            mesha = new THREE.Mesh(geo, mat);
            mesha.position.set(0,0,2.5);
            mesha.rotation.z = 0.785;
            cube[k].add(mesha);
            
            meshb = new THREE.Mesh(geo, mat);
            meshb.position.set(0,0,-2.5);
            meshb.rotation.z = 0.785;
            cube[k].add(meshb);
            
            meshc = new THREE.Mesh(geo, mat);
            meshc.position.set(2.5,0,0);
            meshc.rotation.z = 0.785;
            meshc.rotation.y = 1.57;
            cube[k].add(meshc);
            
            meshd = new THREE.Mesh(geo, mat);
            meshd.position.set(-2.5,0,0);
            meshd.rotation.z = 0.785;
            meshd.rotation.y = 1.57;
            cube[k].add(meshd);
            
            meshe = new THREE.Mesh(geo, mat);
            meshe.position.set(0,2.5,0);
            meshe.rotation.z = 0.785;
            meshe.rotation.x = 1.57;
            cube[k].add(meshe);
            
            meshf = new THREE.Mesh(geo, mat);
            meshf.position.set(0,-2.5,0);
            meshf.rotation.z = 0.785;
            meshf.rotation.x = 1.57;
            cube[k].add(meshf);
           
            scene.add(cube[k]);
       }
      
       setcubes();
   }
    
   function setcubes()
   {
       // set the positions of the cube pieces //
        
            cube[0].position.set(5,5,5);   
            cube[1].position.set(5,5,0);
            cube[2].position.set(5,5,-5);
            cube[3].position.set(5,0,5);
            cube[4].position.set(5,0,0);
            cube[5].position.set(5,0,-5);
            cube[6].position.set(5,-5,5);
            cube[7].position.set(5,-5,0);
            cube[8].position.set(5,-5,-5);
            
            cube[9].position.set(-5,5,5);
            cube[10].position.set(-5,5,0);
            cube[11].position.set(-5,5,-5);
            cube[12].position.set(-5,0,5);
            cube[13].position.set(-5,0,0);
            cube[14].position.set(-5,0,-5);
            cube[15].position.set(-5,-5,5);
            cube[16].position.set(-5,-5,0);
            cube[17].position.set(-5,-5,-5);
            
            cube[18].position.set(0,5,5);
            cube[19].position.set(0,5,0);
            cube[20].position.set(0,5,-5);
            cube[21].position.set(0,0,5);
            cube[22].position.set(0,0,0);
            cube[23].position.set(0,0,-5);
            cube[24].position.set(0,-5,5);
            cube[25].position.set(0,-5,0);
            cube[26].position.set(0,-5,-5);
        
        //  cube piece positioning end.  //
   
   }
 
}