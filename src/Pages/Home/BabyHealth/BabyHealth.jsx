import { useSpring, animated } from 'react-spring';

const BabyHealth = () => {
        const fadeIn = useSpring({
          from: { opacity: 0 },
          to: { opacity: 1 },
          config: { duration: 1000 },
        });
  return (
    <section className="py-12 bg-gray-700 text-grey-400 p-5">
      <div className="container mx-auto flex flex-col items-center">
        <animated.h2 className="text-4xl font-bold mb-8" style={fadeIn}>
          Raising Child Awareness
        </animated.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <animated.div className="rounded-lg overflow-hidden shadow-lg" style={fadeIn}>
            <img src="https://images.unsplash.com/photo-1625831152275-fa582de8188e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="Child Awareness 1" />
            <div className="p-4 bg-grey-800">
              <h3 className="text-lg font-semibold mb-2">Importance of Vaccinations</h3>
              <p className="text-base">
                Vaccinations are vital to protect your child from preventable diseases. Stay informed about the recommended
                immunizations for your child`s age.
              </p>
            </div>
          </animated.div>

          <animated.div className="rounded-lg overflow-hidden shadow-lg" style={fadeIn}>
            <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80" />
            <div className="p-4 bg-grey-800">
              <h3 className="text-lg font-semibold mb-2">Promoting Mental Health</h3>
              <p className="text-base">
                Pay attention to your child`s emotional well-being. Encourage open communication, provide a supportive
                environment, and seek professional help if needed.
              </p>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default BabyHealth;
