const dataFaqs = [
    // PREGUNTAS SOBRE VIDEOS (4 preguntas)
    {
      id: 1,
      title: '¿Qué tipos de videos produce Gravity Visuals?',
      text: 'Ofrecemos una amplia gama de servicios de video, desde aftermovies, videoclips, videos de producto, moda, hasta visuales y contenido para redes sociales. Adaptamos el estilo y formato a las necesidades de cada cliente.',
      category: 'video',
      show: ''
    },
    {
      id: 2,
      title: '¿Cuánto tiempo tarda la producción de un video?',
      text: 'El tiempo de producción varía según el tipo y la complejidad del video. Para un video sencillo puede tardar entre 1 y 2 semanas, mientras que para proyectos más elaborados, como videoclips o aftermovies, puede tomar entre 3 y 4 semanas. Siempre acordamos el plazo de entrega desde el principio.',
      category: 'video',
      show: ''
    },
    {
      id: 3,
      title: '¿Puedo hacer modificaciones a los videos una vez que los he recibido?',
      text: 'Sí, con el presupuesto de tu video ofrecemos una revisión sencilla para asegurarnos de que el resultado final se ajuste a lo que tienes en mente. A su vez también podrás realizar modificaciones de mayor calado con un coste adicional.',
      category: 'video',
      show: ''
    },
    {
      id: 4,
      title: '¿Cuánto cuesta una sesión de grabación de video y edición?',
      text: 'Los precios varían según la duración del servicio, la complejidad del proyecto y los requisitos específicos. Ofrecemos presupuestos personalizados, por lo que siempre puedes contactarnos para obtener una cotización detallada.',
      category: 'video',
      show: ''
    },
  
    // PREGUNTAS SOBRE FOTOGRAFÍA (4 preguntas)
    {
      id: 5,
      title: '¿Qué tipo de fotografía se realiza en la productora?',
      text: 'Ofrecemos tanto fotografía en estudio como en exteriores, incluyendo sesiones para moda, producto, retratos, eventos y más. Nos adaptamos a tus necesidades y estilo. Ven a visitar nuestro estudio en Ponferrada',
      category: 'foto',
      show: ''
    },
    {
      id: 6,
      title: '¿Cuánto cuesta una sesión de fotografía o grabación de video?',
      text: 'Los precios varían según la duración del servicio, la complejidad del proyecto y los requisitos específicos. Ofrecemos presupuestos personalizados, por lo que siempre puedes contactarnos para obtener una cotización detallada.',
      category: 'foto',
      show: ''
    },
    {
      id: 7,
      title: '¿Qué técnicas se utilizan para la edición de fotografías?',
      text: 'Utilizamos técnicas avanzadas de edición para realzar la calidad de cada imagen, adaptándonos al estilo y preferencia del cliente.',
      category: 'foto',
      show: ''
    },
    {
      id: 8,
      title: '¿Realizan retoque digital profesional?',
      text: 'Sí, contamos con expertos en retoque digital para corregir imperfecciones y mejorar la estética de las imágenes.',
      category: 'foto',
      show: ''
    },
  
    // PREGUNTAS SOBRE DISEÑO GRÁFICO (4 preguntas)
    {
      id: 9,
      title: '¿Qué incluye el servicio de diseño gráfico?',
      text: 'Ofrecemos diseño gráfico para crear logos, carteles, folletos, material para redes sociales, branding completo y más. Todo esto con un enfoque creativo para transmitir la imagen y el mensaje de tu marca de manera efectiva.',
      category: 'diseño',
      show: ''
    },
    {
      id: 10,
      title: '¿Pueden diseñar identidad corporativa?',
      text: 'Sí, ofrecemos servicios completos de branding que incluyen el diseño de logos, paletas de colores y tipografías.',
      category: 'diseño',
      show: ''
    },
    {
      id: 11,
      title: '¿Cómo es el proceso de revisión en diseño gráfico?',
      text: 'Realizamos una ronda de revisión para garantizar que el diseño cumpla con tus expectativas y necesidades. Se podrán realizar más revisiones con un coste adicional.',
      category: 'diseño',
      show: ''
    },
    {
        id: 12,
        title: '¿Cómo es el proceso creativo en un proyecto de diseño gráfico?',
        text: 'Nuestro proceso creativo comienza con una fase de análisis y briefing para comprender tus necesidades, seguido de la conceptualización y desarrollo de propuestas personalizadas, hasta llegar a la entrega final de un diseño único y de alta calidad.',
        category: 'diseño',
        show: ''
    },
  
    // PREGUNTAS SOBRE MODELO 3D (Modelado) (4 preguntas)
    {
      id: 13,
      title: '¿Qué tipo de modelado 3D realizan?',
      text: 'Realizamos modelado 3D para crear visualizaciones de tus productos, el branding de tu marca y mucho más. Utilizamos programas de última generación para garantizar que los modelos sean realistas y detallados.',
      category: 'modelo',
      show: ''
    },
    {
      id: 14,
      title: '¿Se pueden realizar animaciones 3D?',
      text: 'Sí, ofrecemos servicios de animación 3D para crear presentaciones dinámicas y visualmente impactantes.',
      category: 'modelo',
      show: ''
    },
    {
      id: 15,
      title: '¿Qué software utilizan para el modelado 3D?',
      text: 'Utilizamos herramientas de última generación como Blender para garantizar resultados de alta calidad.',
      category: 'modelo',
      show: ''
    },
    {
        id: 16,
        title: '¿Pueden integrar los modelos 3D en entornos de realidad virtual o aumentada?',
        text: 'Sí, nuestro equipo cuenta con la experiencia para adaptar y optimizar los modelos 3D en proyectos de realidad virtual y aumentada, garantizando un rendimiento óptimo sin comprometer la calidad visual.',
        category: 'modelo',
        show: ''
      },
  
    // PREGUNTAS GENERALES (4 preguntas)
    {
      id: 17,
      title: '¿Qué software utilizan para la edición de video y fotos?',
      text: 'El software a utilizar depende del proyecto y presupuesto de este. Normalmente utilizamos software profesional como DaVinci Resolve, Adobe Premiere Pro y After Effects para el servicio de video. Photoshop y Lightroom para edición de fotografía. Illustrator y Photoshop para diseño gráfico y Blender para modelado 3D. Trabajamos con las últimas tecnologías para ofrecerte los mejores resultados.',
      category: 'general',
      show: ''
    },
    {
      id: 18,
      title: '¿Cómo puedo contratar un servicio?',
      text: 'Puedes contactarnos directamente a través de nuestra página web, por correo electrónico, por teléfono o agendar una cita. Estaremos encantados de discutir tus necesidades y ofrecerte un presupuesto personalizado.',
      category: 'general',
      show: ''
    },
    {
      id: 19,
      title: '¿Ofrecen servicios para empresas o proyectos grandes?',
      text: 'Sí, trabajamos tanto con clientes individuales como con empresas. Si necesitas producción audiovisual a gran escala, diseño gráfico o modelado 3D para un proyecto corporativo o comercial, podemos adaptar nuestros servicios a tus necesidades. Nosotros nos encargamos de todo el proceso, desde la planificación hasta la entrega final. Si necesitamos colaborar con otros profesionales, contamos con una amplia red de contactos.',
      category: 'general',
      show: ''
    },
    {
      id: 20,
      title: '¿Brindan asesoría para la planificación de proyectos?',
      text: 'Sí, contamos con expertos que te asesorarán en cada etapa del proyecto para garantizar el éxito de tu emprendimiento.',
      category: 'general',
      show: ''
    }
  ];
  
  export default dataFaqs;