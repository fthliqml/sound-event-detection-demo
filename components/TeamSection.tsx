import TeamMember from "./TeamMember";

export default function TeamSection() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-blue-500 animate-pulse">
          <span className="inline-block border-2 border-purple-500 pb-1 tracking-widest rounded-md px-2 py-1">
            OUR TEAM
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember
            name="Muhammad Fatihul Iqmal"
            nim="11221065"
            role="Ketua"
            image="/placeholder.svg?height=300&width=300"
            description="Buen Buen"
            github="https://github.com/fthliqml"
            instagram="https://www.instagram.com/fthliqml/"
          />
          <TeamMember
            name="Azhari Rambe"
            nim="11221019"
            role="Chief Technology Officer"
            image="/placeholder.svg?height=300&width=300"
            description="Buen Buen"
            github="https://github.com/Aozora09"
            instagram="https://www.instagram.com/azhari_aozora"
          />
          <TeamMember
            name="Fhiqi Maulana As-Sddiq"
            nim="11221003"
            role="Chief Technology Officer"
            image="/placeholder.svg?height=300&width=300"
            description="Buen Buen"
            github="https://github.com/alexjohnson"
            instagram="https://www.instagram.com/fhiqi_maulana/"
          />
          <TeamMember
            name="Nabila Chairunnisa"
            nim="11221005"
            role="Chief Technology Officer"
            image="/placeholder.svg?height=300&width=300"
            description="Buen Buen"
            github="https://github.com/alcynx"
            instagram="https://linkedin.com/in/alexjohnson"
          />
          <TeamMember
            name="Ahmad Fakhrurrozi"
            nim="11221011"
            role="Chief Technology Officer"
            image="/placeholder.svg?height=300&width=300"
            description="Buen Buen"
            github="https://github.com/Fakhrurroz11"
            instagram="https://linkedin.com/in/alexjohnson"
          />
          <TeamMember
            name="Dilla Ayu"
            nim="11221031"
            role="Chief Technology Officer"
            image="/placeholder.svg?height=300&width=300"
            description="Buen Buen"
            github="https://github.com/Dillaayh"
            instagram="https://www.instagram.com/dillaayu.16/"
          />
        </div>
      </div>
    </section>
  );
}
