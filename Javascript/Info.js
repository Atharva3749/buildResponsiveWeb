
    const data = `Welcome to my portfolio! I'm a MERN stack developer passionate about crafting innovative web solutions. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in building dynamic and responsive applications that elevate user experiences. From designing sleek user interfaces to implementing robust backend functionalities, I thrive on turning ideas into polished, functional products. Explore my portfolio to discover how I bring creativity and technical proficiency together to solve real-world problems.`;
    const element=document.querySelectorAll('.dynamic-text');
    element.forEach((items)=>{

        items.innerHTML = data;

    })


