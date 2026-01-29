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
    <section id="skills" className="bg-[#0b0d17] py-20 px-4 text-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-orange-500">Work Skills</span>
        </h2>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Tools and skills I use to design and build modern digital products.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Figma */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition">
          <div className="flex justify-center mb-4 text-orange-500">
            <Figma />
          </div>
          <h3 className="text-center font-semibold mb-3">Figma</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500" style={{ width: "99%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-orange-500">99%</p>
        </div>

        {/* WordPress */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition">
          <div className="flex justify-center mb-4 text-orange-500">
            <WholeWordIcon />
          </div>
          <h3 className="text-center font-semibold mb-3">WordPress</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500" style={{ width: "70%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-orange-500">70%</p>
        </div>

        {/* Web Development */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition">
          <div className="flex justify-center mb-4 text-orange-500">
            <Code />
          </div>
          <h3 className="text-center font-semibold mb-3">Web Development</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500" style={{ width: "85%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-orange-500">85%</p>
        </div>

        {/* Web Design */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition">
          <div className="flex justify-center mb-4 text-orange-500">
            <Palette />
          </div>
          <h3 className="text-center font-semibold mb-3">Web Design</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500" style={{ width: "87%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-orange-500">87%</p>
        </div>

        {/* mobile app design */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition">
          <div className="flex justify-center mb-4 text-orange-500">
            <PenTool />
          </div>
          <h3 className="text-center font-semibold mb-3">app design</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500" style={{ width: "73%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-orange-500">73%</p>
        </div>

        {/* Adobe XD */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition">
          <div className="flex justify-center mb-4 text-orange-500">
            <Palette />
          </div>
          <h3 className="text-center font-semibold mb-3">Adobe XD</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500" style={{ width: "99%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-orange-500">99%</p>
        </div>

        {/* Video Editing */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition">
          <div className="flex justify-center mb-4 text-orange-500">
            <PlayCircle />
          </div>
          <h3 className="text-center font-semibold mb-3">Video Editing</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500" style={{ width: "74%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-orange-500">64%</p>
        </div>

        {/* Mobile App */}
        <div className="bg-[#12152a] rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition">
          <div className="flex justify-center mb-4 text-orange-500">
            <Smartphone />
          </div>
          <h3 className="text-center font-semibold mb-3">Mobile App</h3>
          <div className="w-full bg-[#1b1f3a] h-2 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500" style={{ width: "50%" }} />
          </div>
          <p className="text-center text-sm mt-2 text-orange-500">50%</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
