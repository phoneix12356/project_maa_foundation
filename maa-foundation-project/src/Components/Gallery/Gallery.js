import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Hcomp from "./HoverComp";
import api from "../../api/api.js";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const { data } = await api.get("/api/gallery");
        setGalleryItems(data.data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <div className="mx-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 2xl:gap-8">
        <div className="flex flex-col justify-center items-center md:items-start gap-10">
          <h1 className="heading leading-snug font-semibold">
            <span>Empowering Women Our </span>
            <span className="main-heading">Mission in Action</span>
          </h1>
          <p className="text-[#4d4d4d] text-sm sm:text-base md:text-lg lg:text-xl pr-20 2xl:pr-80 -mt-5">
            Explore our journey of empowering women through impactful initiatives. 
            Witness the transformation and strength in every story captured in our mission-driven gallery.
          </p>
          <NavLink to="/contact">
            <button className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl">
              Contact Us
            </button>
          </NavLink>
        </div>
        <div className="flex justify-center items-center">
          <img
            alt="hero_image"
            src="/gallery/heroImage1.jpeg"
            className="w-full"
          />
        </div>
      </div>

      <section className="grid md:grid-cols-3 gap-12 mt-40">
        {galleryItems.length > 0 && (
          <>
            <div
              className="bg-cover bg-center h-[38vw] rounded-md"
              style={{ backgroundImage: `url(${galleryItems[0].imageUrl})` }}
            >
              <Hcomp
                heading="Women Education"
                text="Explore the inspiring Women Educating Programme by Maa Foundation, empowering women through education to create brighter futures. Witness their journey and achievements here."
              />
            </div>

            <div
              className="md:col-span-2 bg-cover bg-center h-[38vw] rounded-md"
              style={{ backgroundImage: `url(${galleryItems[1].imageUrl})` }}
            >
              <Hcomp
                heading="Women Entrepreneur"
                text="Richa Bashistha, founder of Maa Foundation, is a dedicated women entrepreneur committed to empowering communities. Her vision and leadership drive positive change, fostering growth and opportunities for all."
              />
            </div>

            <div
              className="md:col-span-2 row-span-3 bg-cover bg-center h-[60vw] rounded-md"
              style={{ backgroundImage: `url(${galleryItems[2].imageUrl})` }}
            >
              <Hcomp
                heading="Ma & Child Care Program"
                text="Explore our Ma & Child Care program gallery, showcasing heartwarming moments and impactful initiatives dedicated to nurturing maternal and child health at the Maa Foundation."
              />
            </div>

            <div
              className="md:row-span-2 bg-cover bg-center h-[38vw] rounded-md"
              style={{ backgroundImage: `url(${galleryItems[3].imageUrl})` }}
            >
              <Hcomp
                heading="Skill Development"
                text="Explore our Women's Skill Development Program: Empowering Women with Essential Skills for a Brighter Future at Maa Foundation."
              />
            </div>

            <div
              className="md:row-span-2 bg-cover bg-center h-[38vw] rounded-md"
              style={{ backgroundImage: `url(${galleryItems[4].imageUrl})` }}
            >
              <Hcomp
                heading="Eye Care Camp"
                text="Explore our Eye Care Medical Camp gallery, transforming lives through vision care. Witness our impact firsthand."
              />
            </div>

            <div
              className="bg-cover bg-center md:h-[16vw] h-[38vw] rounded-md"
              style={{ backgroundImage: `url(${galleryItems[5].imageUrl})` }}
            >
              <Hcomp
                heading="Medical Camps"
                text="Explore our impactful free medical camps. Witness how Maa Foundation serves communities through healthcare initiatives."
              />
            </div>

            <div
              className="bg-cover bg-center md:h-[16vw] h-[38vw] rounded-md"
              style={{ backgroundImage: `url(${galleryItems[6].imageUrl})` }}
            >
              <Hcomp
                heading="Medical Camps"
                text="Explore our impactful free medical camps. Witness how Maa Foundation serves communities through healthcare initiatives."
              />
            </div>

            <div
              className="md:col-span-3 bg-cover bg-center h-[40vw] rounded-md"
              style={{ backgroundImage: `url(${galleryItems[7].imageUrl})` }}
            >
              <Hcomp
                heading="Richabashistha's Seminar"
                text="Richa Bashistha, founder of Maa Foundation, is a dedicated advocate for community development. She recently engaged with stakeholders, highlighting her commitment to impactful change and fostering collaborative efforts for sustainable growth."
              />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Gallery;
