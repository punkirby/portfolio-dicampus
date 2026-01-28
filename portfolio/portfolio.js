let miHTML='';
let lenguajes=["HTML","CSS","JS"]
const Ejercicios= {
    html:[
        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },
        
        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },

        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        }
    ], 

    css:[
         { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },

        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },

        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },

        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },

        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },
    ],

    js:[
        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },

        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },

        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },

        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },

        { 
            titulo: "", 
            descripcion:"",
            fechas:"",
            url:"",
            img:""
        },
        
    ]
}

function mostrar(tipo,id){
	let datos = Ejercicios[tipo];
	let miInfo = "";

	for (let i = 0; i < datos.length; i++) {
		miInfo += `
	<li>
		<img src="${datos[i].img}">
		<h3>${datos[i].titulo}</h3>
		<p>${datos[i].descripcion}</p>
		<span>${datos[i].fechas}</span>
		<a class="btn" href="${datos[i].url}" target="_blank">Ver Ejercicio</a>
	</li>`;
	}
	document.querySelector(id).innerHTML = miInfo;
}

mostrar('html','#html');
mostrar('css','#css');
mostrar('js','#js');