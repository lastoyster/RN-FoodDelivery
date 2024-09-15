import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: process.env.PROJECT_ID,
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-08-31",
});

const builder =imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;