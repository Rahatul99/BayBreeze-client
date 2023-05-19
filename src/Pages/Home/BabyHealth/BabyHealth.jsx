import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const BabyHealth = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: 'ease-in-out',
      mirror: true,
      once: false,
      placement: 'top-center',
    });
  }, []);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <section className="py-12 bg-gray-700 text-grey-400 p-5">
      <div className="container mx-auto flex flex-col items-center">
        <animated.h2 className="text-2xl font-bold mb-8" style={fadeIn} data-aos="fade-up">
          Raising Child Awareness
        </animated.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <animated.div className="rounded-lg overflow-hidden shadow-lg" style={fadeIn} data-aos="fade-up">
            <img src="https://images.unsplash.com/photo-1625831152275-fa582de8188e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="Child Awareness 1" />
            <div className="p-4 bg-grey-800 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Importance of Vaccinations</h3>
              <p className="text-base">
                Vaccinations are vital to protect your child from preventable diseases. Stay informed about the recommended
                immunizations for your child s age.
              </p>
              <button className="btn-accent mt-4 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                <Link href="https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work?adgroupsurvey={adgroupsurvey}&gclid=CjwKCAjwvJyjBhApEiwAWz2nLf5Uxn6wrwzSqROOm76pJaelDgAqaaEqjQfbdp25k-2V3SDIOMy4uRoCyxUQAvD_BwE" target="_blank" rel="noopener noreferrer">
                  Know More (WHO)
                </Link>
              </button>
            </div>
          </animated.div>

          <animated.div className="rounded-lg overflow-hidden shadow-lg" style={fadeIn} data-aos="fade-up">
            <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80" alt="Child Awareness 2" />
            <div className="p-4 bg-grey-800 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Promoting Mental Health</h3>
              <p className="text-base">
                Pay attention to child emotional well-being.Encourage open communication, provide a supportive
                environment, and seek professional help if needed.
              </p>
              <button className="btn-accent mt-3 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                <Link href="https://www.unicef.org/parenting/mental-health?gclid=CjwKCAjwvJyjBhApEiwAWz2nLW6s98yL2lsmJr84stcrT3df5-T_UuOk19gcTILiZPitSjhYs3jj1RoC00wQAvD_BwE" target="_blank" rel="noopener noreferrer">
                  Know More (UNICEF)
                </Link>
              </button>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default BabyHealth;
