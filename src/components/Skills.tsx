import {
  Figma,

  Code,
  Palette,
  PenTool,
  PlayCircle,
  Smartphone,
  WholeWordIcon,
} from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 text-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-yellow-400">Work Skills</span>
        </h2>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Tools and skills I use to design and build modern digital products.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Figma */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-yellow-400/30 transition">
          <div className="flex justify-center mb-4 text-yellow-400">
            <Figma />
          </div>
          <h3 className="text-center font-semibold mb-3">Figma</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: "99%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-yellow-400">99%</p>
        </div>

        {/* WordPress */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-yellow-400/30 transition">
          <div className="flex justify-center mb-4 text-yellow-400">
            <WholeWordIcon />
          </div>
          <h3 className="text-center font-semibold mb-3">WordPress</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: "70%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-yellow-400">70%</p>
        </div>

        {/* Web Development */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-yellow-400/30 transition">
          <div className="flex justify-center mb-4 text-yellow-400">
            <Code />
          </div>
          <h3 className="text-center font-semibold mb-3">Web Development</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: "85%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-yellow-400">85%</p>
        </div>

        {/* Web Design */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-yellow-400/30 transition">
          <div className="flex justify-center mb-4 text-yellow-400">
            <Palette />
          </div>
          <h3 className="text-center font-semibold mb-3">Web Design</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: "87%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-yellow-400">87%</p>
        </div>

        {/* mobile app design */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-yellow-400/30 transition">
          <div className="flex justify-center mb-4 text-yellow-400">
            <PenTool />
          </div>
          <h3 className="text-center font-semibold mb-3">app design</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: "73%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-yellow-400">73%</p>
        </div>

        {/* Adobe XD */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-yellow-400/30 transition">
          <div className="flex justify-center mb-4 text-yellow-400">
            <Palette />
          </div>
          <h3 className="text-center font-semibold mb-3">Adobe XD</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: "99%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-yellow-400">99%</p>
        </div>

        {/* Video Editing */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-yellow-400/30 transition">
          <div className="flex justify-center mb-4 text-yellow-400">
            <PlayCircle />
          </div>
          <h3 className="text-center font-semibold mb-3">Video Editing</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: "74%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-yellow-400">64%</p>
        </div>

        {/* Mobile App */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-yellow-400/30 transition">
          <div className="flex justify-center mb-4 text-yellow-400">
            <Smartphone />
          </div>
          <h3 className="text-center font-semibold mb-3">Mobile App</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: "50%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-yellow-400">50%</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
