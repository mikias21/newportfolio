import ProjectItem from "../Projects/ProjectItem";

const Blog = () => {
  return (
    <div
      className="p-7 border-b border-b-slate-50 md:p-14 lg:p-20 xl:mx-20 dark:border-b-slate-900"
      id="blog"
    >
      <p className="text-lg font-poppins w-full mb-5">Blog</p>

      <div className="w-full sm:w-1/2 sm:pr-2 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-5 md:pr-3">
        <ProjectItem
          title="Dokerize Vue frontend with Fastapi and Mariadb."
          desc="Interconnecting docker containers in a simplest way possible."
          techs={["docker", "vue", "fastapi, mariadb"]}
          img="/images/docker.webp"
          link="https://medium.com/@mikiasmesfina0123/dokerize-vue-frontend-with-fastapi-and-mariadb-ab9b8ec9195d"
        />
      </div>
    </div>
  );
};

export default Blog;
