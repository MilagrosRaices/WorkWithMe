    function init()
    {
        mensajeConSweet()
    }

    function mensajeConSweet()
    {
        Swal.fire({
            title: "Bienvenidos!", 
            imageUrl: "https://c.tenor.com/q0wlraRLemYAAAAC/aesthetic-bunny.gif",
            imageWidth: '200px',
            text: "Estas listo para comenzar tus tareas?",
            width: "600px",
            background: "pink",
            color: "white",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "VAMOS!",
            cancelButtonText: "En otro momento"
            }).then((result)=>{
                if(result.isConfirmed)
                {
                    Swal.fire({
                        title: `GENIAL!`, 
                        text: 'Comenzemos',
                        icon: 'success',
                        confirmButtonText: '❤'
                    });
                }
                else{
                    Swal.fire({
                        title: "Muy bien, un dia libre no le hace mal a nadie", 
                        text: 'Nos vemos pronto',
                        confirmButtonText: 'ADIOS'
                    });
                }
            })
    }
       
        
        