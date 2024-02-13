const data = [
  {
    id: "1",
    question: "What is a black hole?",
    answer:
      "A black hole is a region in space where gravity is so strong that nothing, not even light, can escape from it. It forms when a massive star collapses under its own gravity at the end of its life cycle.",
  },
  {
    id: "2",
    question: "How do we detect black holes if they don't emit light?",
    answer:
      "Black holes cannot be directly observed because they do not emit light. However, astronomers can infer their presence by observing the effects of their gravity on nearby matter, such as the distortion of light from stars and gas swirling around them, or the detection of X-rays emitted by heated gas falling into them.",
  },
  {
    id: "3",
    question: "What is the event horizon of a black hole?",
    answer:
      "The event horizon of a black hole is the boundary beyond which nothing can escape its gravitational pull, not even light. Once an object crosses the event horizon, it is inexorably drawn toward the black hole's singularity at its center.",
  },
  {
    id: "4",
    question: "Can anything escape from a black hole?",
    answer:
      "According to our current understanding of physics, once something crosses the event horizon of a black hole, it cannot escape. However, there are theoretical concepts such as Hawking radiation, which suggests that black holes can emit radiation and lose mass over time.",
  },
  {
    id: "5",
    question: "What happens if you fall into a black hole?",
    answer:
      "If you were to fall into a black hole, you would be stretched and compressed by the intense gravitational forces in a process called spaghettification. As you approach the singularity at the center of the black hole, you would be torn apart into your constituent atoms.",
  },
  {
    id: "6",
    question: "Do black holes last forever?",
    answer:
      "Black holes are expected to exist for an extremely long time, but they are not eternal. Over vast periods of time, black holes can slowly lose mass through processes like Hawking radiation, eventually evaporating completely.",
  },
  {
    id: "7",
    question: "Can black holes merge?",
    answer:
      "Yes, black holes can merge when two or more of them come close enough together. When black holes merge, they release a tremendous amount of energy in the form of gravitational waves, which can be detected by instruments such as LIGO and Virgo.",
  },
  {
    id: "8",
    question: "What is the relationship between black holes and time dilation?",
    answer:
      "Black holes are so massive that they warp the fabric of spacetime around them. As a result, time near a black hole flows slower compared to time further away. This effect, known as time dilation, means that time appears to move more slowly for an observer near a black hole compared to someone farther away.",
  },
  {
    id: "9",
    question: "What is a supermassive black hole?",
    answer:
      "A supermassive black hole is a black hole with a mass millions to billions of times greater than that of the Sun. These black holes are thought to exist at the centers of most galaxies, including our own Milky Way galaxy.",
  },
  {
    id: "10",
    question: "How are stellar-mass black holes formed?",
    answer:
      "Stellar-mass black holes are formed from the remnants of massive stars that have exhausted their nuclear fuel and undergone supernova explosions. If the remaining core of the star is massive enough, it can collapse into a black hole.",
  },
  {
    id: "11",
    question: "What is the Schwarzschild radius of a black hole?",
    answer:
      "The Schwarzschild radius, also known as the gravitational radius, is the radius of the event horizon of a non-rotating black hole. It represents the distance from the center of the black hole to the event horizon, beyond which escape is impossible.",
  },
  {
    id: "12",
    question: "Can black holes be used for time travel?",
    answer:
      "The possibility of using black holes for time travel is a topic of speculation in theoretical physics. Some theories suggest that it might be possible to use a rotating black hole's ergosphere to create closed timelike curves, but this remains highly speculative and has not been demonstrated.",
  },
  {
    id: "13",
    question: "What is the difference between a black hole and a wormhole?",
    answer:
      "A black hole is a region of space where gravity is so strong that nothing, not even light, can escape from it. A wormhole, on the other hand, is a hypothetical tunnel-like structure that connects two separate points in spacetime. While both involve extreme distortions of spacetime, they serve different purposes in theoretical physics.",
  },
  {
    id: "14",
    question: "Can black holes be used as a source of energy?",
    answer:
      "Theoretically, it might be possible to extract energy from black holes through processes like the Penrose process, which involves extracting rotational energy from a rotating black hole. However, the practicalities and feasibility of such methods remain purely speculative at this point.",
  },
  {
    id: "15",
    question: "What is a black hole's singularity?",
    answer:
      "A black hole's singularity is a point at the center of the black hole where matter is infinitely dense and spacetime curvature becomes infinite. It is where the laws of physics as we know them break down.",
  },
  {
    id: "16",
    question: "Are there different types of black holes?",
    answer:
      "Yes, black holes can be categorized into different types based on their mass and properties. The main types include stellar-mass black holes, supermassive black holes, and intermediate-mass black holes.",
  },
  {
    id: "17",
    question: "What is an accretion disk?",
    answer:
      "An accretion disk is a structure of rapidly rotating matter, such as gas and dust, that accumulates around a compact object like a black hole. As material in the disk spirals inward, it heats up and emits various forms of electromagnetic radiation.",
  },
  {
    id: "18",
    question: "How do black holes influence the motion of nearby stars?",
    answer:
      "Black holes exert a gravitational pull on nearby stars, causing them to orbit around the black hole in a manner similar to planets orbiting a star. The motion of these stars can be used to infer the presence and properties of the black hole.",
  },
  {
    id: "19",
    question: "What is spaghettification?",
    answer:
      "Spaghettification, also known as the noodle effect, is the vertical stretching and horizontal compression of objects into long thin shapes in a very strong gravitational field, such as that of a black hole.",
  },
  {
    id: "20",
    question: "Can black holes be observed directly?",
    answer:
      "Currently, black holes cannot be observed directly because they do not emit light. However, scientists have indirectly observed the effects of black holes on their surroundings using various astronomical techniques.",
  },
  {
    id: "21",
    question: "What happens when two black holes collide?",
    answer:
      "When two black holes collide, they merge into a single, more massive black hole. This process releases a tremendous amount of energy in the form of gravitational waves, which can be detected by observatories like LIGO and Virgo.",
  },
  {
    id: "22",
    question: "What is the size of a black hole?",
    answer:
      "The size of a black hole is determined by its Schwarzschild radius, which depends on its mass. For example, a black hole with the mass of the Sun would have a radius of about 3 kilometers (1.9 miles).",
  },
  {
    id: "23",
    question: "Can black holes move?",
    answer:
      "Yes, black holes can move through space like any other object with mass. Their motion is influenced by gravitational interactions with other objects and can be affected by the dynamics of the galaxies in which they reside.",
  },
  {
    id: "24",
    question: "What is a micro black hole?",
    answer:
      "A micro black hole is a hypothetical black hole with a mass much smaller than that of stellar-mass black holes. They are theorized to have formed in the early universe or through certain high-energy processes.",
  },
  {
    id: "25",
    question: "What is the No-Hair Theorem?",
    answer:
      "The No-Hair Theorem states that black holes can be fully described by only three properties: mass, electric charge, and angular momentum (spin). This theorem suggests that black holes lose all other information about their initial state as they evolve.",
  },
  {
    id: "26",
    question: "Can black holes be used for time travel?",
    answer:
      "The possibility of using black holes for time travel is a topic of speculation in theoretical physics. Some theories suggest that it might be possible to use a rotating black hole's ergosphere to create closed timelike curves, but this remains highly speculative and has not been demonstrated.",
  },
  {
    id: "27",
    question: "What is a white hole?",
    answer:
      "A white hole is a hypothetical region of spacetime that cannot be entered from the outside but can only eject matter and light. It is the theoretical time-reversal of a black hole.",
  },
  {
    id: "28",
    question: "What is the firewall paradox?",
    answer:
      "The firewall paradox is a theoretical problem in black hole physics that arises when considering the behavior of an observer falling into a black hole. It suggests that the event horizon might not be a smooth boundary as traditionally thought, but rather a region of intense energy and radiation.",
  },
];

export default data;
