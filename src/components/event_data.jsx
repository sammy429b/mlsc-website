const event ={
    "Github": 
        {
          id: "event 1",
          name: "Github & Azure",
          day:"Aug 5",
          date: "August \n 5 \n2023",
          img: new URL("../assets/event1/6.jpg", import.meta.url).href,
          eventlogo: new URL("../assets/logos/github.png", import.meta.url).href,
          status:"past",
          description: "Conducted our first event on basics of Azure and Github"
        },
    "Cloud" :  {
        id: "event 2",
        name: "Cloud Skill Challenge",
        day:"Sept 22",
        date: "September \n 22 \n2023",
        description: "Hosted an learning based event on cloud skills called Cloud Skill Challenge",
        img: new URL("../assets/event1/3.jpg", import.meta.url).href,
        eventlogo: new URL("../assets/logos/azure.png", import.meta.url).href,
        status:"past"
    },
    "Dexterity: Interlock":{
        id: "event 3",
        name: "Dexterity: Interlock",
        day:"Oct 27",
        date: "October \n 27 \n2023",
        description: "Conducted a fun challenge event for annual fest Dexterity 2023",
        img: new URL("../assets/event1/dextirity.jpg", import.meta.url).href,
        eventlogo: new URL("../assets/logos/dexterity.png", import.meta.url).href,
        status:"past"
    },
    "Dashboard Dynamics":{
        id: "event 4",
        name: "Dashboard Dynamics with Power BI",
        day:"Feb 16",
        date: "Feb \n 16 \n2023",
        description: "Conducted a hands on workshop on Business Intellegence in collaboration with ",
        img: new URL("../assets/event1/dashboard.jpg", import.meta.url).href,
        eventlogo: new URL("../assets/logos/BI.png", import.meta.url).href,
        status:"past"
    },
    
}

export default event;