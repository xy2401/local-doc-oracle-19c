define(
{
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"List of Figures",
                    "href":"lof.html"
                },
                {
                    "title":"List of Tables",
                    "href":"lot.html"
                },
                {
                    "title":"Title and Copyright Information",
                    "href":"index.html"
                },
                {
                    "title":"Preface",
                    "href":"preface.html#GUID-4C20E22B-D2CC-4DA6-A5EB-849C1AECCC0C",
                    "topics":[
                        {
                            "title":"Audience",
                            "href":"preface.html#GUID-49C8E72D-4501-45EE-AA88-301BBC80FBB8"
                        },
                        {
                            "title":"Documentation Accessibility",
                            "href":"preface.html#GUID-E409CC44-9A8F-4043-82C8-6B95CD939296"
                        },
                        {
                            "title":"Related Documents",
                            "href":"preface.html#GUID-CA72AB1E-B527-4B73-BF40-9937A23D6366"
                        },
                        {
                            "title":"Conventions",
                            "href":"preface.html#GUID-8AC9C2F9-F988-4482-9937-65AA4CD8340F"
                        }
                    ]
                },
                {
                    "title":"Changes in This Release for Oracle Spatial and Graph GeoRaster Developer's Guide",
                    "href":"georaster-whats-new.html#GUID-2146064C-E3E8-40EB-B519-3EDF527CAC49",
                    "topics":[
                        {
                            "title":"Changes in Oracle Database 19.1",
                            "href":"georaster-whats-new.html#GUID-04710482-6164-4EFE-9381-A82054A1DF91",
                            "topics":[
                                {
                                    "title":"GeoRaster Must Be Enabled at Schema Level",
                                    "href":"georaster-whats-new.html#GUID-60B10226-A3F7-4235-B88A-09050EC95137"
                                },
                                {
                                    "title":"SDO_GEOR_RA Support for Result Data in a BLOB",
                                    "href":"georaster-whats-new.html#GUID-B2FD57E3-E2DE-4FFD-B393-8AA3A745FD7C"
                                }
                            ]
                        },
                        {
                            "title":"Changes in Oracle Database 18.1",
                            "href":"georaster-whats-new.html#GUID-51D4F3DA-AD39-4969-A455-B861AF68E049",
                            "topics":[
                                {
                                    "title":"New SDO_GEOR_GDAL Package",
                                    "href":"georaster-whats-new.html#GUID-9875F96A-4623-438D-8082-C360B70F28B6"
                                },
                                {
                                    "title":"GeoRaster PL/SQL API Changes",
                                    "href":"georaster-whats-new.html#GUID-DF41904F-05BC-428E-A3D2-6B006DAE8848"
                                },
                                {
                                    "title":"GeoRaster Java API Changes",
                                    "href":"georaster-whats-new.html#GUID-3E41417C-DDF7-462B-93FA-DFBB39103405"
                                },
                                {
                                    "title":"4GB Limit Removed for External JPEG 2000 Image Files",
                                    "href":"georaster-whats-new.html#GUID-63145FAA-E413-450B-876A-F7A4B4AD0F0B"
                                },
                                {
                                    "title":"Mixed Case User and Schema Names Supported",
                                    "href":"georaster-whats-new.html#GUID-001CCA95-70A0-4040-966B-299D3F2357B5"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">1 </span> GeoRaster Overview and Concepts",
                    "href":"georaster-overview-and-concepts.html#GUID-3DAEDA62-561C-40ED-A350-D15766726917",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">1.1 </span> Vector and Raster Data",
                            "href":"georaster-overview-and-concepts.html#GUID-5DD5F197-77EE-4AB1-8DA0-6D9A6DFEB545"
                        },
                        {
                            "title":"<span class=\"secnum\">1.2 </span> Raster Data Sources",
                            "href":"georaster-overview-and-concepts.html#GUID-D62E194B-A02E-4D02-BBE5-3CAF41DE7AEB",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">1.2.1 </span> Remote Sensing",
                                    "href":"georaster-overview-and-concepts.html#GUID-01C461C2-2D1B-465D-B6E7-5A490801FE7A"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2.2 </span> Photogrammetry",
                                    "href":"georaster-overview-and-concepts.html#GUID-6145D8E1-2DBC-462D-9AA3-7638847C986B"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2.3 </span> Geographic Information Systems",
                                    "href":"georaster-overview-and-concepts.html#GUID-48247CC8-812E-4C48-92DE-7FC5B76AE3B3"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2.4 </span> Cartography",
                                    "href":"georaster-overview-and-concepts.html#GUID-9CDA9AB4-11CA-4EF6-920A-60D8DF5813AE"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2.5 </span> Digital Image Processing",
                                    "href":"georaster-overview-and-concepts.html#GUID-71CEF783-5C2E-4A97-8979-033344CE9F72"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2.6 </span> Geology, Geophysics, and Geochemistry",
                                    "href":"georaster-overview-and-concepts.html#GUID-447048C7-2C29-45DA-B97E-B7449C8D6D7D"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">1.3 </span> GeoRaster Data Model",
                            "href":"georaster-overview-and-concepts.html#GUID-E38F1F16-4272-4CC8-A199-C97B11C634BA"
                        },
                        {
                            "title":"<span class=\"secnum\">1.4 </span> GeoRaster Physical Storage",
                            "href":"georaster-overview-and-concepts.html#GUID-DB21CC32-06DC-4E18-A4FB-B15C389C1F72",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">1.4.1 </span> Storage Parameters",
                                    "href":"georaster-overview-and-concepts.html#GUID-4B5901B5-879D-4E5F-BE73-2242F3D7CF9D"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.4.2 </span> Raster Data Table",
                                    "href":"georaster-overview-and-concepts.html#GUID-2F832FEF-9937-4BF9-BB32-FBD056FCF017"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.4.3 </span> Blank and Empty GeoRaster Objects",
                                    "href":"georaster-overview-and-concepts.html#GUID-C4D574D6-340B-49DC-95BD-87FDEB11CE16"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.4.4 </span> Empty Raster Blocks",
                                    "href":"georaster-overview-and-concepts.html#GUID-51AA757B-0EE9-4EAD-8394-17ED95041F74"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.4.5 </span> Cross-Schema Support with GeoRaster",
                                    "href":"georaster-overview-and-concepts.html#GUID-19C1371A-74D8-409C-89C8-D52FF41F405F"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">1.5 </span> Bands, Layers, and Metadata",
                            "href":"georaster-overview-and-concepts.html#GUID-9E5186D8-1206-4619-A260-F689FF724CFC"
                        },
                        {
                            "title":"<span class=\"secnum\">1.6 </span> Georeferencing",
                            "href":"georaster-overview-and-concepts.html#GUID-E32BF03B-DB83-422E-B7D0-C0F3073890F9",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">1.6.1 </span> Functional Fitting Georeferencing Model",
                                    "href":"georaster-overview-and-concepts.html#GUID-D07DEFFD-F25A-4D8D-8A94-9AFD05CE4256"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.6.2 </span> Ground Control Point (GCP) Georeferencing Model",
                                    "href":"georaster-overview-and-concepts.html#GUID-EC9DEF7E-54B5-488A-BBCC-932334C9FF9E"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.6.3 </span> Cell Coordinate and Model Coordinate Transformation",
                                    "href":"georaster-overview-and-concepts.html#GUID-A873FA27-462F-48FF-8931-F2B2B581EA3D"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">1.7 </span> Resampling and Interpolation",
                            "href":"georaster-overview-and-concepts.html#GUID-3BD837FF-70CF-44B3-8489-242FF4590D61"
                        },
                        {
                            "title":"<span class=\"secnum\">1.8 </span> Pyramids",
                            "href":"georaster-overview-and-concepts.html#GUID-739D74CC-E256-4E89-AB7F-9251054B9E82"
                        },
                        {
                            "title":"<span class=\"secnum\">1.9 </span> Bitmap Masks",
                            "href":"georaster-overview-and-concepts.html#GUID-20696505-9B9E-4E08-B165-1B23A574BEB3"
                        },
                        {
                            "title":"<span class=\"secnum\">1.10 </span> NODATA Values and Value Ranges",
                            "href":"georaster-overview-and-concepts.html#GUID-3F2FCF41-FDE6-434F-A318-93E0667C927D"
                        },
                        {
                            "title":"<span class=\"secnum\">1.11 </span> Compression and Decompression",
                            "href":"georaster-overview-and-concepts.html#GUID-9BEA34A1-E05E-4E70-B09D-97A0EF1027B8",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">1.11.1 </span> JPEG (JPEG-F) Compression of GeoRaster Objects",
                                    "href":"georaster-overview-and-concepts.html#GUID-A5FD4A39-79A2-461F-8188-1342CDB10025",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">1.11.1.1 </span> JPEG-B Support Deprecated",
                                            "href":"georaster-overview-and-concepts.html#GUID-AB656482-7CA9-45ED-A52C-1BD8B7075B90"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">1.11.2 </span> JPEG 2000 Compression of GeoRaster Objects",
                                    "href":"georaster-overview-and-concepts.html#GUID-C77A0F5E-2C53-4750-B6FD-5918308BBCB6"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.11.3 </span> DEFLATE Compression of GeoRaster Objects",
                                    "href":"georaster-overview-and-concepts.html#GUID-FF0794A1-1862-4B49-A6E0-BE1BB21A97EC"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.11.4 </span> Decompression of GeoRaster Objects",
                                    "href":"georaster-overview-and-concepts.html#GUID-4D74E242-D666-4F21-BA64-2315A26CFBBD"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.11.5 </span> Third-Party Plug-ins for Compression",
                                    "href":"georaster-overview-and-concepts.html#GUID-D2F21C14-DC30-49A9-A5AD-6220412F9A81"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.11.6 </span> Advanced LOB Compression",
                                    "href":"georaster-overview-and-concepts.html#GUID-18773C73-3A73-4508-93D3-BDF6A3856D10"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">1.12 </span> GeoRaster and Database Management",
                            "href":"georaster-overview-and-concepts.html#GUID-D2A92C5F-F818-415D-8ED7-5CA7C610F54C"
                        },
                        {
                            "title":"<span class=\"secnum\">1.13 </span> Parallel Processing in GeoRaster",
                            "href":"georaster-overview-and-concepts.html#GUID-8EC0357C-9089-448E-9ED0-1B33F36E8F3C"
                        },
                        {
                            "title":"<span class=\"secnum\">1.14 </span> Reporting Operation Progress in GeoRaster",
                            "href":"georaster-overview-and-concepts.html#GUID-B57F4783-7F39-4AC2-AB95-02984E3C44E9"
                        },
                        {
                            "title":"<span class=\"secnum\">1.15 </span> GeoRaster PL/SQL API",
                            "href":"georaster-overview-and-concepts.html#GUID-2498EC76-4A75-402A-A6A7-D3973819E6A4"
                        },
                        {
                            "title":"<span class=\"secnum\">1.16 </span> GeoRaster Java API",
                            "href":"georaster-overview-and-concepts.html#GUID-8C3DD238-15D5-42F2-A87A-D59A1F9929BC"
                        },
                        {
                            "title":"<span class=\"secnum\">1.17 </span> GeoRaster Spatial Web Services",
                            "href":"georaster-overview-and-concepts.html#GUID-ADEE5CDF-4D6F-47BE-96E0-08349CCA2B0F"
                        },
                        {
                            "title":"<span class=\"secnum\">1.18 </span> MapViewer and GeoRaster",
                            "href":"georaster-overview-and-concepts.html#GUID-9E77EA0E-C4C7-47F1-BC63-716BA313977D"
                        },
                        {
                            "title":"<span class=\"secnum\">1.19 </span> GeoRaster Tools: Viewer, Loader, Exporter",
                            "href":"georaster-overview-and-concepts.html#GUID-4813E3BC-2DB8-4310-82E5-3ADC467C0253",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">1.19.1 </span> JAI-Based Viewer, Loader, and Exporter",
                                    "href":"georaster-overview-and-concepts.html#GUID-8FE18098-EE55-490D-81C9-7DE1DCFDDB34"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.19.2 </span> GDAL-Based ETL Wizard for Concurrent Batch Loading and Exporting",
                                    "href":"georaster-overview-and-concepts.html#GUID-6E9B9872-7222-45AD-8FE1-CAFF596D3955"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.19.3 </span> Using GDAL from the Spatial and Graph Installation",
                                    "href":"georaster-overview-and-concepts.html#GUID-15C6ABD8-85DC-4F39-A2BE-E4508B59B41E"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.19.4 </span> Using the SDO_GEOR_GDAL Package",
                                    "href":"georaster-overview-and-concepts.html#GUID-0A746B49-F462-44B1-BCBB-258CE53E79DC"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">1.20 </span> GeoRaster PL/SQL and Java Sample Files",
                            "href":"georaster-overview-and-concepts.html#GUID-0B5D0180-E897-4F30-9E65-65D827024A95"
                        },
                        {
                            "title":"<span class=\"secnum\">1.21 </span> README File for Spatial and Graph and Related Features",
                            "href":"georaster-overview-and-concepts.html#GUID-4D041A95-E226-47B5-8DFF-41828DD2DB19"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">2 </span> GeoRaster Data Types and Related Structures",
                    "href":"georaster-datatypes.html#GUID-98F692F8-C05A-4D8F-AB6A-484D5268D30A",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">2.1 </span> SDO_GEORASTER Object Type",
                            "href":"georaster-datatypes.html#GUID-80616475-2A56-43B9-B707-58B369661632",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.1.1 </span> rasterType Attribute",
                                    "href":"georaster-datatypes.html#GUID-FC03ECF3-D18F-46BE-A8D5-6B41AAA937AF"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.1.2 </span> spatialExtent Attribute",
                                    "href":"georaster-datatypes.html#GUID-E392DB15-C7C3-40E8-815C-527D2CD1F45F"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.1.3 </span> rasterDataTable Attribute",
                                    "href":"georaster-datatypes.html#GUID-212AA5DB-FBB5-4B56-96D8-DF72403E372C"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.1.4 </span> rasterID Attribute",
                                    "href":"georaster-datatypes.html#GUID-9D0532DD-1A16-433A-AB57-205B2A0CAF19"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.1.5 </span> metadata Attribute",
                                    "href":"georaster-datatypes.html#GUID-3460694F-88BD-4132-B923-A4F06A058F43"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.2 </span> SDO_RASTER Object Type and the Raster Data Table",
                            "href":"georaster-datatypes.html#GUID-9679F06D-50A0-4EF7-9204-E85CA2F38378",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.2.1 </span> rasterID Attribute",
                                    "href":"georaster-datatypes.html#GUID-9FCC8104-FAC4-4EFA-9BB5-66BD35E9E902"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.2.2 </span> pyramidLevel Attribute",
                                    "href":"georaster-datatypes.html#GUID-9FDB26F7-7EC2-4B50-99F5-FBF57BE46EFE"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.2.3 </span> bandBlockNumber Attribute",
                                    "href":"georaster-datatypes.html#GUID-A75AD25E-C3A5-4FCF-8EB3-E2B33EC3A638"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.2.4 </span> rowBlockNumber Attribute",
                                    "href":"georaster-datatypes.html#GUID-426144E3-41B8-40A0-B890-FA566F6529CB"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.2.5 </span> columnBlockNumber Attribute",
                                    "href":"georaster-datatypes.html#GUID-A925A136-FCE6-4AD3-A089-7EDBC4872B99"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.2.6 </span> blockMBR Attribute",
                                    "href":"georaster-datatypes.html#GUID-E06BC978-1039-48A9-B6B9-DE4152AB42B8"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.2.7 </span> rasterBlock Attribute",
                                    "href":"georaster-datatypes.html#GUID-0B5F4A05-37FF-402C-A69F-6304287438AA"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.3 </span> Other GeoRaster Types",
                            "href":"georaster-datatypes.html#GUID-690756C5-5114-47B0-B417-B939BF5FBBA6",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.3.1 </span> SDO_GEOR_HISTOGRAM Object Type",
                                    "href":"georaster-datatypes.html#GUID-0EFD151A-375D-493F-8C0F-CFD2DA8638FC"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.3.2 </span> SDO_GEOR_HISTOGRAM_ARRAY Collection Type",
                                    "href":"georaster-datatypes.html#GUID-CAF85499-604A-4406-9025-722051C21434"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.3.3 </span> SDO_GEOR_COLORMAP Object Type",
                                    "href":"georaster-datatypes.html#GUID-CEE244F7-DDDA-4B97-B128-53F97E89D9B3"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.3.4 </span> SDO_GEOR_GRAYSCALE Object Type",
                                    "href":"georaster-datatypes.html#GUID-62D45A64-ABEB-4386-BD2F-0003BF2CC551"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.3.5 </span> SDO_RASTERSET Collection Type",
                                    "href":"georaster-datatypes.html#GUID-512FF9E1-5DFE-4D90-ABCB-DE82CA02DA25"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.3.6 </span> SDO_GEOR_SRS Object Type",
                                    "href":"georaster-datatypes.html#GUID-A7C5B4C6-2B57-4E3F-B796-3313F6D67E57"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.3.7 </span> SDO_GEOR_GCP Object Type",
                                    "href":"georaster-datatypes.html#GUID-339ED929-236B-4178-ADAB-F4901E37EBF6"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.3.8 </span> SDO_GEOR_GCP_ COLLECTION Collection Type",
                                    "href":"georaster-datatypes.html#GUID-622DEDBA-8E96-46A3-AFC3-DEBEEE15561D"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.3.9 </span> SDO_GEOR_GCPGEOREFTYPE Object Type",
                                    "href":"georaster-datatypes.html#GUID-41205B52-4D3B-4870-A7DF-6B5AB9FFB58B"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.4 </span> GeoRaster System Data Views (xxx_SDO_GEOR_SYSDATA)",
                            "href":"georaster-datatypes.html#GUID-657BA65F-E8FF-41D7-94B6-BA412993EC52",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.4.1 </span> TABLE_NAME Column",
                                    "href":"georaster-datatypes.html#GUID-441A9890-F85D-4C31-BAB7-AE58CB0E1F44"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.4.2 </span> COLUMN_NAME Column",
                                    "href":"georaster-datatypes.html#GUID-B242B9AD-9607-42B9-BEDC-3FA2AF77D780"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.4.3 </span> METADATA_COLUMN_NAME Column",
                                    "href":"georaster-datatypes.html#GUID-9A3C0441-67E6-447A-B769-01A313208D4B"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.4.4 </span> RDT_TABLE_NAME Column",
                                    "href":"georaster-datatypes.html#GUID-20D7EC44-3CB5-4200-95F4-9AE2CCF4721F"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.4.5 </span> RASTER_ID Column",
                                    "href":"georaster-datatypes.html#GUID-0621B7B2-C7D1-4281-BF91-EACD4105954C"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.4.6 </span> OTHER_TABLE_NAMES Column",
                                    "href":"georaster-datatypes.html#GUID-1D3ED32A-EB9B-48CA-B48A-34F121D1D1FB"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.5 </span> GeoRaster XML Schema",
                            "href":"georaster-datatypes.html#GUID-16D246D1-7895-4C68-BFFC-79DBA2926C46"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">3 </span> GeoRaster Database Creation and Management",
                    "href":"georaster-database-creation-management.html#GUID-92D80CF0-F503-40BE-B1E6-D06A1DF033B6",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">3.1 </span> Enabling GeoRaster at the Schema Level",
                            "href":"georaster-database-creation-management.html#GUID-20119C51-6B07-4535-954E-7C55850F51F3"
                        },
                        {
                            "title":"<span class=\"secnum\">3.2 </span> Adding Data Files and Temporary Tablespaces for GeoRaster Users",
                            "href":"georaster-database-creation-management.html#GUID-2162EF15-706C-43D2-B2BF-AAD219D8CB88"
                        },
                        {
                            "title":"<span class=\"secnum\">3.3 </span> Creating the GeoRaster Table and Raster Data Tables",
                            "href":"georaster-database-creation-management.html#GUID-796CD9B4-27C6-49F5-B374-CB4316ABBE13",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.3.1 </span> Creating a GeoRaster Table",
                                    "href":"georaster-database-creation-management.html#GUID-2524D3F1-8E8B-476B-839C-E8D518AEF7B8"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.3.2 </span> Creating Raster Data Tables",
                                    "href":"georaster-database-creation-management.html#GUID-9A353A7D-CD42-4692-AFD2-554353919431"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.3.3 </span> GeoRaster DML Trigger",
                                    "href":"georaster-database-creation-management.html#GUID-41CD2847-8823-479A-AC0F-A991B2F083A9"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.4 </span> Creating New GeoRaster Objects",
                            "href":"georaster-database-creation-management.html#GUID-A6E26D1A-490F-4D47-B86C-3E4AD707457D"
                        },
                        {
                            "title":"<span class=\"secnum\">3.5 </span> Loading Raster Data",
                            "href":"georaster-database-creation-management.html#GUID-FC1E8154-B852-4D5D-A348-45E69785BF81",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.5.1 </span> Loading with Blocking and Optimal Padding",
                                    "href":"georaster-database-creation-management.html#GUID-FFB6CD25-B4AC-4746-BAC5-E9ED82D763F0"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.5.2 </span> Loading JPEG and JPEG 2000 Images Without Decompression",
                                    "href":"georaster-database-creation-management.html#GUID-A60C8EB8-E7BF-41D6-B674-5DD5EF383426"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.5.3 </span> Reformatting the Source Raster Before Loading",
                                    "href":"georaster-database-creation-management.html#GUID-7FBC6EB0-D4B8-43F8-A6F5-11C4319632AB"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.6 </span> Validating GeoRaster Objects",
                            "href":"georaster-database-creation-management.html#GUID-B79DA887-66D0-4961-A2EA-2052144F2B17"
                        },
                        {
                            "title":"<span class=\"secnum\">3.7 </span> Georeferencing GeoRaster Objects",
                            "href":"georaster-database-creation-management.html#GUID-5E9E62CA-A4CB-4298-9345-0351F60DECC0"
                        },
                        {
                            "title":"<span class=\"secnum\">3.8 </span> Generating and Setting Spatial Extents",
                            "href":"georaster-database-creation-management.html#GUID-004D9CB3-916E-46C3-830B-FA2C88625B88",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.8.1 </span> Special Considerations if the GeoRaster Table Has a Spatial Index",
                                    "href":"georaster-database-creation-management.html#GUID-2512A66C-3558-4374-95AB-5A090D99EA78"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.9 </span> Indexing GeoRaster Objects",
                            "href":"georaster-database-creation-management.html#GUID-F31E1BAD-DE81-462E-8103-7A67CF7A8D0E"
                        },
                        {
                            "title":"<span class=\"secnum\">3.10 </span> Viewing GeoRaster Objects",
                            "href":"georaster-database-creation-management.html#GUID-C65D9E81-48AA-4569-B8E3-2A52263B2435"
                        },
                        {
                            "title":"<span class=\"secnum\">3.11 </span> Exporting GeoRaster Objects",
                            "href":"georaster-database-creation-management.html#GUID-D45DBC81-B4E5-4D06-B1F2-82339C6F52E2"
                        },
                        {
                            "title":"<span class=\"secnum\">3.12 </span> Using GeoRaster with Workspace Manager and Label Security",
                            "href":"georaster-database-creation-management.html#GUID-BBE8942E-96B3-4EBE-ADB9-AA3FC8FFF3DD",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.12.1 </span> Using GeoRaster with Workspace Manager",
                                    "href":"georaster-database-creation-management.html#GUID-A78EEF50-DA67-476E-96C0-F4715620098B"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.12.2 </span> Using GeoRaster with Label Security",
                                    "href":"georaster-database-creation-management.html#GUID-F33D17DF-B8D8-40CD-8040-44A6F8684B7E"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.13 </span> Maintaining Efficient Tablespace Use by GeoRaster Objects",
                            "href":"georaster-database-creation-management.html#GUID-CE77309C-2712-4EC0-B92B-B3A0A028EB32"
                        },
                        {
                            "title":"<span class=\"secnum\">3.14 </span> Checking GeoRaster Tables and Objects in the Database",
                            "href":"georaster-database-creation-management.html#GUID-D3750F8A-54EB-4334-9F52-522BBEE82BD3"
                        },
                        {
                            "title":"<span class=\"secnum\">3.15 </span> Maintaining GeoRaster Objects and System Data in the Database",
                            "href":"georaster-database-creation-management.html#GUID-14CEA0C1-837D-4DD4-A255-80ECCC28615E"
                        },
                        {
                            "title":"<span class=\"secnum\">3.16 </span> Transferring GeoRaster Data Between Databases",
                            "href":"georaster-database-creation-management.html#GUID-0F77203F-486F-4160-A03C-8E7EA2594DB1",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.16.1 </span> Checking for and Resolving Conflicts",
                                    "href":"georaster-database-creation-management.html#GUID-2EA1AFDA-D11D-4913-87B3-DF222E290696"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.16.2 </span> Performing the GeoRaster Data Transfer",
                                    "href":"georaster-database-creation-management.html#GUID-1B3CA536-A9A6-41AB-B704-13B66A4957EE"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.17 </span> Using Transportable Tablespaces with GeoRaster Data",
                            "href":"georaster-database-creation-management.html#GUID-51C68427-CA7F-4E85-90AD-780D770DF81F"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">4 </span> GeoRaster Data Query and Manipulation",
                    "href":"georaster-data-manipulation.html#GUID-C56DB84D-5F94-432A-A9BB-E31CF4D1B7AA",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">4.1 </span> Querying and Searching GeoRaster Objects",
                            "href":"georaster-data-manipulation.html#GUID-13578486-979A-410B-94BB-863DBB4AA7E2"
                        },
                        {
                            "title":"<span class=\"secnum\">4.2 </span> Changing and Optimizing Raster Storage",
                            "href":"georaster-data-manipulation.html#GUID-C27E5446-4222-447C-9661-19A5AA8CE9FC"
                        },
                        {
                            "title":"<span class=\"secnum\">4.3 </span> Copying GeoRaster Objects",
                            "href":"georaster-data-manipulation.html#GUID-5D4085E6-5A61-4AC1-B386-C7E1ABA63174"
                        },
                        {
                            "title":"<span class=\"secnum\">4.4 </span> Subsetting GeoRaster Objects with Polygon Clipping",
                            "href":"georaster-data-manipulation.html#GUID-01A627A0-0EC5-4FAE-AA6A-950116E2FBB8"
                        },
                        {
                            "title":"<span class=\"secnum\">4.5 </span> Querying and Updating GeoRaster Metadata",
                            "href":"georaster-data-manipulation.html#GUID-DB762BC3-88BA-4716-9F0C-A4DC4AEC624F"
                        },
                        {
                            "title":"<span class=\"secnum\">4.6 </span> Querying and Updating GeoRaster Cell Data",
                            "href":"georaster-data-manipulation.html#GUID-D78B30EA-E592-4D34-94AC-AB2B1435D60E"
                        },
                        {
                            "title":"<span class=\"secnum\">4.7 </span> Interpolating Cell Values",
                            "href":"georaster-data-manipulation.html#GUID-8C2E91C6-54EF-4285-9B6F-83002E347B3E"
                        },
                        {
                            "title":"<span class=\"secnum\">4.8 </span> Processing and Analyzing GeoRaster Objects",
                            "href":"georaster-data-manipulation.html#GUID-D5389E0F-A151-4476-8EA6-DCA329FEFB31"
                        },
                        {
                            "title":"<span class=\"secnum\">4.9 </span> Monitoring and Reporting GeoRaster Operation Progress",
                            "href":"georaster-data-manipulation.html#GUID-AA00D7EE-B6ED-4A42-9475-F353CB5989AC"
                        },
                        {
                            "title":"<span class=\"secnum\">4.10 </span> Compressing and Decompressing GeoRaster Objects",
                            "href":"georaster-data-manipulation.html#GUID-900D8B54-15B7-4044-AF7F-7BC6854535FE"
                        },
                        {
                            "title":"<span class=\"secnum\">4.11 </span> Deleting GeoRaster Objects, and Performing Actions on GeoRaster Tables and RDTs",
                            "href":"georaster-data-manipulation.html#GUID-3FE51533-061E-4A2F-BB3E-49A723FE3553"
                        },
                        {
                            "title":"<span class=\"secnum\">4.12 </span> Performing Cross-Schema Operations",
                            "href":"georaster-data-manipulation.html#GUID-CA53EDD9-AC59-479F-8280-82EAF85A2141"
                        },
                        {
                            "title":"<span class=\"secnum\">4.13 </span> Managing Memory to Improve Performance",
                            "href":"georaster-data-manipulation.html#GUID-EF5B66A9-DD46-4178-96F6-B699D4AF3808"
                        },
                        {
                            "title":"<span class=\"secnum\">4.14 </span> Updating GeoRaster Objects Before Committing",
                            "href":"georaster-data-manipulation.html#GUID-7AB60C10-E48E-4281-A03A-DA38FFA9F121"
                        },
                        {
                            "title":"<span class=\"secnum\">4.15 </span> Updating GeoRaster Objects in a Loop",
                            "href":"georaster-data-manipulation.html#GUID-0603D2D3-AD36-4F30-970D-038309F55A17"
                        },
                        {
                            "title":"<span class=\"secnum\">4.16 </span> Using Template-Related Subprograms to Develop GeoRaster Applications",
                            "href":"georaster-data-manipulation.html#GUID-A77AAC5B-B0EE-4F8A-9569-79A14D88658B"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">5 </span> Raster Algebra and Analytics",
                    "href":"raster-algebra-and-analytics.html#GUID-C75744C9-FA04-4391-96F2-59EF2EA212FF",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">5.1 </span> Raster Algebra Language",
                            "href":"raster-algebra-and-analytics.html#GUID-A6F087DC-1E7E-4426-B778-8554A25B3494",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">5.1.1 </span> Examples of Raster Algebra Expressions",
                                    "href":"raster-algebra-and-analytics.html#GUID-E2DA56C4-CCC3-48FD-87FE-98B6966DE3BE"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">5.2 </span> Cell Value-Based Conditional Queries",
                            "href":"raster-algebra-and-analytics.html#GUID-FF9C7591-6CCB-41B2-941D-7998F94B8FE9"
                        },
                        {
                            "title":"<span class=\"secnum\">5.3 </span> Cell Value-Based Conditional Updates (Edits)",
                            "href":"raster-algebra-and-analytics.html#GUID-0AEAF37F-6147-4CC7-9573-929B1EF6B44F"
                        },
                        {
                            "title":"<span class=\"secnum\">5.4 </span> Mathematical Operations",
                            "href":"raster-algebra-and-analytics.html#GUID-C6250398-2364-4FEE-B06E-644B5F1251AB"
                        },
                        {
                            "title":"<span class=\"secnum\">5.5 </span> Classification Operations",
                            "href":"raster-algebra-and-analytics.html#GUID-57DE5ACD-7DE9-4871-9DF0-CC685DF5114E"
                        },
                        {
                            "title":"<span class=\"secnum\">5.6 </span> Statistical Operations",
                            "href":"raster-algebra-and-analytics.html#GUID-B1A7F654-E438-48F1-9EB6-55268FA260B1",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">5.6.1 </span> On-the-Fly Statistical Analysis",
                                    "href":"raster-algebra-and-analytics.html#GUID-9FF22F4B-19E8-45B2-9811-8ABA00268613"
                                },
                                {
                                    "title":"<span class=\"secnum\">5.6.2 </span> Stack Statistical Analysis",
                                    "href":"raster-algebra-and-analytics.html#GUID-94CA2FD0-EAF3-4ED9-803F-9129DD2E0584"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">5.7 </span> Logical Operations",
                            "href":"raster-algebra-and-analytics.html#GUID-022F5214-9D1E-44B4-8487-967C93CC2954",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">5.7.1 </span> Using Raster Algebra Procedures with Logical Expressions",
                                    "href":"raster-algebra-and-analytics.html#GUID-4CA82053-00A1-44BF-B675-969796BA8735"
                                },
                                {
                                    "title":"<span class=\"secnum\">5.7.2 </span> Using Raster Algebra Functions Only",
                                    "href":"raster-algebra-and-analytics.html#GUID-DDCEB15D-3C90-4317-B8B5-A633AD248519"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">5.8 </span> Raster Data Scaling and Offsetting",
                            "href":"raster-algebra-and-analytics.html#GUID-34B59129-70AC-4E51-BF6D-2E43AA2A813B"
                        },
                        {
                            "title":"<span class=\"secnum\">5.9 </span> Raster Data Casting",
                            "href":"raster-algebra-and-analytics.html#GUID-13B8293B-2AE1-4687-B98A-9463EF42AC27"
                        },
                        {
                            "title":"<span class=\"secnum\">5.10 </span> Cartographic Modeling",
                            "href":"raster-algebra-and-analytics.html#GUID-F2EBC84A-8BB8-484B-9F32-FC88D4E5F166"
                        },
                        {
                            "title":"<span class=\"secnum\">5.11 </span> Terrain Modeling and Analysis",
                            "href":"raster-algebra-and-analytics.html#GUID-90AF506E-C29A-464F-95F8-2923E79AFE9B"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">6 </span> Image Processing and Virtual Mosaic",
                    "href":"image-processing-virtual-mosaic.html#GUID-EB60166B-6A52-4974-AF16-139CD6480EBC",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">6.1 </span> Advanced Georeferencing",
                            "href":"image-processing-virtual-mosaic.html#GUID-AA625889-BB88-4633-BECD-E76FAE05EE01"
                        },
                        {
                            "title":"<span class=\"secnum\">6.2 </span> Image Reprojection",
                            "href":"image-processing-virtual-mosaic.html#GUID-7AEE808F-F450-41C2-AB4C-AA7D740AF928"
                        },
                        {
                            "title":"<span class=\"secnum\">6.3 </span> Image Rectification",
                            "href":"image-processing-virtual-mosaic.html#GUID-EFDF0FB9-9FFA-4254-997B-1C7D3D7CF897"
                        },
                        {
                            "title":"<span class=\"secnum\">6.4 </span> Image Orthorectification",
                            "href":"image-processing-virtual-mosaic.html#GUID-1EA97BE8-2B6B-4E0E-B89E-57ECD1C33F95",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">6.4.1 </span> Orthorectification with Average Height",
                                    "href":"image-processing-virtual-mosaic.html#GUID-2A0127F1-E83D-4462-B19B-52DB968F1737"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.4.2 </span> Orthorectification with DEM",
                                    "href":"image-processing-virtual-mosaic.html#GUID-C79FECF7-D80B-4B50-91D6-398D81315C77"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">6.5 </span> Image Warping",
                            "href":"image-processing-virtual-mosaic.html#GUID-F9C2917F-B85A-4D24-B760-A60CB5685501"
                        },
                        {
                            "title":"<span class=\"secnum\">6.6 </span> Image Affine Transformation and Scaling",
                            "href":"image-processing-virtual-mosaic.html#GUID-E4C18793-CFE6-49CC-8957-6FA9DD99CB7B"
                        },
                        {
                            "title":"<span class=\"secnum\">6.7 </span> Image Stretching, Normalization, Equalization, Histogram Matching, and Dodging",
                            "href":"image-processing-virtual-mosaic.html#GUID-1BFCB081-6C19-4727-B07E-1127515D75CD"
                        },
                        {
                            "title":"<span class=\"secnum\">6.8 </span> Image Filtering",
                            "href":"image-processing-virtual-mosaic.html#GUID-F3C5A387-4E89-4E85-B17D-75FB75917869"
                        },
                        {
                            "title":"<span class=\"secnum\">6.9 </span> Image Segmentation",
                            "href":"image-processing-virtual-mosaic.html#GUID-21CA4981-4DFB-4918-BC1F-13803AFEAD28"
                        },
                        {
                            "title":"<span class=\"secnum\">6.10 </span> Image Pyramiding: Parallel Generation and Partial Update",
                            "href":"image-processing-virtual-mosaic.html#GUID-9935029B-2ED5-4A7B-9157-336AD5F57D77"
                        },
                        {
                            "title":"<span class=\"secnum\">6.11 </span> Bitmap Pyramiding",
                            "href":"image-processing-virtual-mosaic.html#GUID-60EC1E32-9E68-4E4D-8FFE-54A8A19A07EE"
                        },
                        {
                            "title":"<span class=\"secnum\">6.12 </span> Vegetation Index Computation",
                            "href":"image-processing-virtual-mosaic.html#GUID-C2D99D00-071F-4BBC-A0A5-50C6F0FAF355"
                        },
                        {
                            "title":"<span class=\"secnum\">6.13 </span> Tasseled Cap Transformation",
                            "href":"image-processing-virtual-mosaic.html#GUID-2530F5D2-7386-4DD4-877A-F004F2109912"
                        },
                        {
                            "title":"<span class=\"secnum\">6.14 </span> Image Masking",
                            "href":"image-processing-virtual-mosaic.html#GUID-846AEB51-5BCC-48D6-8B27-8F846F38CC15"
                        },
                        {
                            "title":"<span class=\"secnum\">6.15 </span> Band Merging",
                            "href":"image-processing-virtual-mosaic.html#GUID-8BE9EF2F-EAFE-4247-B8CD-50B3AD3A3807"
                        },
                        {
                            "title":"<span class=\"secnum\">6.16 </span> Image Appending",
                            "href":"image-processing-virtual-mosaic.html#GUID-EE1AFE0D-730E-49DC-80AF-E99504D14156"
                        },
                        {
                            "title":"<span class=\"secnum\">6.17 </span> Large-Scale Image Mosaicking",
                            "href":"image-processing-virtual-mosaic.html#GUID-992BAEDB-C6EC-4E0E-97AA-C18A59F960FA",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">6.17.1 </span> Color Balancing During Mosaicking",
                                    "href":"image-processing-virtual-mosaic.html#GUID-123957BD-EF8E-43D2-A2C9-40A6CFE3FA19"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.17.2 </span> Parallel Compression, Copying, and Subsetting",
                                    "href":"image-processing-virtual-mosaic.html#GUID-8BA68795-65F7-40A6-AD9C-8E774B527176"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">6.18 </span> Virtual Mosaic",
                            "href":"image-processing-virtual-mosaic.html#GUID-16C91449-1E94-4B3F-9403-EEFE483251AD",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">6.18.1 </span> Virtual Mosaic as One or a List of GeoRaster Tables",
                                    "href":"image-processing-virtual-mosaic.html#GUID-FF053675-AB0E-47AB-8D33-418B6A153E70"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.18.2 </span> Virtual Mosaic as a View with a GeoRaster Column",
                                    "href":"image-processing-virtual-mosaic.html#GUID-BA5D3A32-A095-4A3D-9A1F-364D7248CDD3"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.18.3 </span> Virtual Mosaic as a SQL Query Statement or a Cursor",
                                    "href":"image-processing-virtual-mosaic.html#GUID-809D9B4C-AEB7-47A2-864A-6881FB3FB6AA"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.18.4 </span> Using Virtual Mosaic in Applications",
                                    "href":"image-processing-virtual-mosaic.html#GUID-D785EAD0-F1AD-4F1F-9C4A-AF1C73012B38"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.18.5 </span> Special Considerations for Large-Scale Virtual Mosaic",
                                    "href":"image-processing-virtual-mosaic.html#GUID-F59FD2B5-6E1A-4998-BF3A-2BCE3EE7F49D",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">6.18.5.1 </span> Improving Query Performance Using MIN_X_RES$ and MAX_X_RES$",
                                            "href":"image-processing-virtual-mosaic.html#GUID-0926A2AC-B835-470D-9D73-B63F745CDA7B"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">6.19 </span> Image Serving",
                            "href":"image-processing-virtual-mosaic.html#GUID-639C081E-8E7F-4467-8B89-3363810F561F"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">7 </span> SDO_GEOR Package Reference",
                    "href":"SDO_GEOR-reference.html#GUID-587A19B6-40FF-4F1C-AC13-556891070C30",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">7.1 </span> SDO_GEOR.addNODATA",
                            "href":"SDO_GEOR-reference.html#GUID-343CF513-F75E-4763-8E8A-13C591E3EE31"
                        },
                        {
                            "title":"<span class=\"secnum\">7.2 </span> SDO_GEOR.addSourceInfo",
                            "href":"SDO_GEOR-reference.html#GUID-72193847-6E53-4113-884E-F89B727A1966"
                        },
                        {
                            "title":"<span class=\"secnum\">7.3 </span> SDO_GEOR.affineTransform",
                            "href":"SDO_GEOR-reference.html#GUID-9C8F8F29-5D1A-4403-9147-B9FD1A30B767"
                        },
                        {
                            "title":"<span class=\"secnum\">7.4 </span> SDO_GEOR.calcCompressionRatio",
                            "href":"SDO_GEOR-reference.html#GUID-04CCFACA-67C4-4E31-91E2-6C454632BF8A"
                        },
                        {
                            "title":"<span class=\"secnum\">7.5 </span> SDO_GEOR.changeCellValue",
                            "href":"SDO_GEOR-reference.html#GUID-7F2859CD-4A33-4711-A926-5CFA405C7551"
                        },
                        {
                            "title":"<span class=\"secnum\">7.6 </span> SDO_GEOR.changeCellValues",
                            "href":"SDO_GEOR-reference.html#GUID-087181AF-7695-4B17-A764-C63AF9096FA4"
                        },
                        {
                            "title":"<span class=\"secnum\">7.7 </span> SDO_GEOR.changeFormatCopy",
                            "href":"SDO_GEOR-reference.html#GUID-9C8E8AE6-4C33-4813-B94A-A69C6206E8C4"
                        },
                        {
                            "title":"<span class=\"secnum\">7.8 </span> SDO_GEOR.compressJP2",
                            "href":"SDO_GEOR-reference.html#GUID-B9F2CE15-3808-46E7-B1E5-A666B3E76BEE"
                        },
                        {
                            "title":"<span class=\"secnum\">7.9 </span> SDO_GEOR.copy",
                            "href":"SDO_GEOR-reference.html#GUID-72D93D49-BF98-4AB9-8FEA-C386A1BE1071"
                        },
                        {
                            "title":"<span class=\"secnum\">7.10 </span> SDO_GEOR.createBlank",
                            "href":"SDO_GEOR-reference.html#GUID-7D203CE7-A6F0-4545-92B4-5E8ED3E007FE"
                        },
                        {
                            "title":"<span class=\"secnum\">7.11 </span> SDO_GEOR.createTemplate",
                            "href":"SDO_GEOR-reference.html#GUID-5C7E6DDA-B9C1-4A67-9C1B-5FA35D2FB7C1"
                        },
                        {
                            "title":"<span class=\"secnum\">7.12 </span> SDO_GEOR.decompressJP2",
                            "href":"SDO_GEOR-reference.html#GUID-6B411E83-F1F7-4EB3-9A65-99F95F52EF97"
                        },
                        {
                            "title":"<span class=\"secnum\">7.13 </span> SDO_GEOR.deleteControlPoint",
                            "href":"SDO_GEOR-reference.html#GUID-ACB2F70E-DAB7-4AFC-9DDE-F35F451A19C1"
                        },
                        {
                            "title":"<span class=\"secnum\">7.14 </span> SDO_GEOR.deleteNODATA",
                            "href":"SDO_GEOR-reference.html#GUID-F436EA0B-FD04-4369-8001-7EC0AA8643C8"
                        },
                        {
                            "title":"<span class=\"secnum\">7.15 </span> SDO_GEOR.deletePyramid",
                            "href":"SDO_GEOR-reference.html#GUID-351B293B-CE47-45E0-92F0-DC7A52D84FDF"
                        },
                        {
                            "title":"<span class=\"secnum\">7.16 </span> SDO_GEOR.evaluateDouble",
                            "href":"SDO_GEOR-reference.html#GUID-3997A37D-60FD-4F24-A9D0-F90E9BCCC523"
                        },
                        {
                            "title":"<span class=\"secnum\">7.17 </span> SDO_GEOR.evaluateDoubles",
                            "href":"SDO_GEOR-reference.html#GUID-0E56C4EF-7AA4-4EA1-9E82-B5534193178C"
                        },
                        {
                            "title":"<span class=\"secnum\">7.18 </span> SDO_GEOR.exportTo",
                            "href":"SDO_GEOR-reference.html#GUID-6261233E-5E90-479C-97FD-8125C28EC838"
                        },
                        {
                            "title":"<span class=\"secnum\">7.19 </span> SDO_GEOR.generateAreaWeightedMean",
                            "href":"SDO_GEOR-reference.html#GUID-179F3873-50F9-48A9-A54C-644A0DABF231"
                        },
                        {
                            "title":"<span class=\"secnum\">7.20 </span> SDO_GEOR.generateBitmapPyramid",
                            "href":"SDO_GEOR-reference.html#GUID-78D4949A-D751-43F9-8066-C479980C8FB8"
                        },
                        {
                            "title":"<span class=\"secnum\">7.21 </span> SDO_GEOR.generateBlockMBR",
                            "href":"SDO_GEOR-reference.html#GUID-3D259BE8-962A-457D-96AB-70282BD75B2C"
                        },
                        {
                            "title":"<span class=\"secnum\">7.22 </span> SDO_GEOR.generatePyramid",
                            "href":"SDO_GEOR-reference.html#GUID-896CB187-FAC1-4A2C-9921-B98AC4E92F3B"
                        },
                        {
                            "title":"<span class=\"secnum\">7.23 </span> SDO_GEOR.generateSpatialExtent",
                            "href":"SDO_GEOR-reference.html#GUID-45E80146-A186-418F-9396-260BCC7A3BE8"
                        },
                        {
                            "title":"<span class=\"secnum\">7.24 </span> SDO_GEOR.generateSpatialResolutions",
                            "href":"SDO_GEOR-reference.html#GUID-EBAB2A71-4CE3-4FB1-A66B-8B883F16D11E"
                        },
                        {
                            "title":"<span class=\"secnum\">7.25 </span> SDO_GEOR.generateStatistics",
                            "href":"SDO_GEOR-reference.html#GUID-96B2E47F-17E2-491D-9FF6-AC7BEFB434D7"
                        },
                        {
                            "title":"<span class=\"secnum\">7.26 </span> SDO_GEOR.generateStatisticsMax",
                            "href":"SDO_GEOR-reference.html#GUID-FD88A636-A97B-456E-A07A-DE2D6AE54545"
                        },
                        {
                            "title":"<span class=\"secnum\">7.27 </span> SDO_GEOR.generateStatisticsMean",
                            "href":"SDO_GEOR-reference.html#GUID-CE118FEB-6F5D-4B42-9D95-2989355D7222"
                        },
                        {
                            "title":"<span class=\"secnum\">7.28 </span> SDO_GEOR.generateStatisticsMedian",
                            "href":"SDO_GEOR-reference.html#GUID-5726F33E-CDE7-4793-9973-B0F779E629E8"
                        },
                        {
                            "title":"<span class=\"secnum\">7.29 </span> SDO_GEOR.generateStatisticsMin",
                            "href":"SDO_GEOR-reference.html#GUID-963EB183-C710-471B-A1DA-9665D93FE2DC"
                        },
                        {
                            "title":"<span class=\"secnum\">7.30 </span> SDO_GEOR.generateStatisticsMode",
                            "href":"SDO_GEOR-reference.html#GUID-D36B7F54-FEF4-4111-AF3F-99A193BEC0D9"
                        },
                        {
                            "title":"<span class=\"secnum\">7.31 </span> SDO_GEOR.generateStatisticsSTD",
                            "href":"SDO_GEOR-reference.html#GUID-453A78AC-CCDB-4E87-9A67-7C2C113B1C57"
                        },
                        {
                            "title":"<span class=\"secnum\">7.32 </span> SDO_GEOR.georeference",
                            "href":"SDO_GEOR-reference.html#GUID-BFA20035-A3A9-41C6-A7B0-DFB014C73F34"
                        },
                        {
                            "title":"<span class=\"secnum\">7.33 </span> SDO_GEOR.getBandDimSize",
                            "href":"SDO_GEOR-reference.html#GUID-2A5774BE-F38F-469C-B8CB-E829BC25E05A"
                        },
                        {
                            "title":"<span class=\"secnum\">7.34 </span> SDO_GEOR.getBeginDateTime",
                            "href":"SDO_GEOR-reference.html#GUID-6E81C8BB-F675-4C33-8F20-85B63E993F90"
                        },
                        {
                            "title":"<span class=\"secnum\">7.35 </span> SDO_GEOR.getBinFunction",
                            "href":"SDO_GEOR-reference.html#GUID-EE67D76E-36C1-4339-BE6B-F8BB570957C8"
                        },
                        {
                            "title":"<span class=\"secnum\">7.36 </span> SDO_GEOR.getBinTable",
                            "href":"SDO_GEOR-reference.html#GUID-E4D1BFC3-3903-49E9-84AD-EC90A419F10A"
                        },
                        {
                            "title":"<span class=\"secnum\">7.37 </span> SDO_GEOR.getBinType",
                            "href":"SDO_GEOR-reference.html#GUID-4DC6D580-3555-436D-B79F-84D1ECB1E7B4"
                        },
                        {
                            "title":"<span class=\"secnum\">7.38 </span> SDO_GEOR.getBitmapMask",
                            "href":"SDO_GEOR-reference.html#GUID-15EE67B7-1CB4-46C9-AAA3-5823D9D9C87F"
                        },
                        {
                            "title":"<span class=\"secnum\">7.39 </span> SDO_GEOR.getBitmapMaskSubset",
                            "href":"SDO_GEOR-reference.html#GUID-FD56B2AC-429D-4558-8C49-93B9FEE7B963"
                        },
                        {
                            "title":"<span class=\"secnum\">7.40 </span> SDO_GEOR.getBitmapMaskValue",
                            "href":"SDO_GEOR-reference.html#GUID-6F14DFC5-C9F1-44DF-8D39-771A642E9189"
                        },
                        {
                            "title":"<span class=\"secnum\">7.41 </span> SDO_GEOR.getBitmapMaskValues",
                            "href":"SDO_GEOR-reference.html#GUID-168512A1-60B7-4C69-BADB-EB605E72A9CC"
                        },
                        {
                            "title":"<span class=\"secnum\">7.42 </span> SDO_GEOR.getBlankCellValue",
                            "href":"SDO_GEOR-reference.html#GUID-831068FF-AACD-4921-BFE2-40364C313E6F"
                        },
                        {
                            "title":"<span class=\"secnum\">7.43 </span> SDO_GEOR.getBlockingType",
                            "href":"SDO_GEOR-reference.html#GUID-4D8EC4EE-EFF5-427A-9942-23F6CC92D07F"
                        },
                        {
                            "title":"<span class=\"secnum\">7.44 </span> SDO_GEOR.getBlockSize",
                            "href":"SDO_GEOR-reference.html#GUID-522A9BFD-3EC2-4235-A2AC-F419B8CAF976"
                        },
                        {
                            "title":"<span class=\"secnum\">7.45 </span> SDO_GEOR.getCellCoordinate",
                            "href":"SDO_GEOR-reference.html#GUID-65B7D251-A852-44AE-904A-36787748A6E6"
                        },
                        {
                            "title":"<span class=\"secnum\">7.46 </span> SDO_GEOR.getCellDepth",
                            "href":"SDO_GEOR-reference.html#GUID-A5300BED-A9B3-4E98-8047-F6494C967641"
                        },
                        {
                            "title":"<span class=\"secnum\">7.47 </span> SDO_GEOR.getCellValue",
                            "href":"SDO_GEOR-reference.html#GUID-1E61D84B-F431-4532-B16E-E005596D4DAC"
                        },
                        {
                            "title":"<span class=\"secnum\">7.48 </span> SDO_GEOR.getCellValues",
                            "href":"SDO_GEOR-reference.html#GUID-A5CB5BAE-B73C-43BF-8196-E21FD1196275"
                        },
                        {
                            "title":"<span class=\"secnum\">7.49 </span> SDO_GEOR.getColorMap",
                            "href":"SDO_GEOR-reference.html#GUID-4DB65943-A209-49EE-85FD-E9FC2310830B"
                        },
                        {
                            "title":"<span class=\"secnum\">7.50 </span> SDO_GEOR.getColorMapTable",
                            "href":"SDO_GEOR-reference.html#GUID-AC46B84A-5B97-43E3-BED0-5D41A751DA30"
                        },
                        {
                            "title":"<span class=\"secnum\">7.51 </span> SDO_GEOR.getCompressionType",
                            "href":"SDO_GEOR-reference.html#GUID-FB0A7B82-B289-4E3F-AB3E-0C8B4FE9BE5B"
                        },
                        {
                            "title":"<span class=\"secnum\">7.52 </span> SDO_GEOR.getControlPoint",
                            "href":"SDO_GEOR-reference.html#GUID-C2E30658-697E-413D-9EC7-1C55814B5BBD"
                        },
                        {
                            "title":"<span class=\"secnum\">7.53 </span> SDO_GEOR.getDefaultAlpha",
                            "href":"SDO_GEOR-reference.html#GUID-B91E3C24-370C-44AD-BD04-C9A3924879B8"
                        },
                        {
                            "title":"<span class=\"secnum\">7.54 </span> SDO_GEOR.getDefaultBlue",
                            "href":"SDO_GEOR-reference.html#GUID-83F98871-CDD4-4C32-89B7-28090CA19902"
                        },
                        {
                            "title":"<span class=\"secnum\">7.55 </span> SDO_GEOR.getDefaultColorLayer",
                            "href":"SDO_GEOR-reference.html#GUID-CF324DC5-5CA8-4FDB-8CBC-6AE994669B31"
                        },
                        {
                            "title":"<span class=\"secnum\">7.56 </span> SDO_GEOR.getDefaultGreen",
                            "href":"SDO_GEOR-reference.html#GUID-CE06DFFA-E9EB-4FEC-B0CE-6C4A14C11901"
                        },
                        {
                            "title":"<span class=\"secnum\">7.57 </span> SDO_GEOR.getDefaultPyramidLevel",
                            "href":"SDO_GEOR-reference.html#GUID-E157EEB8-83C7-4705-9D72-B2216D347030"
                        },
                        {
                            "title":"<span class=\"secnum\">7.58 </span> SDO_GEOR.getDefaultRed",
                            "href":"SDO_GEOR-reference.html#GUID-A87B6A9E-E6CF-4E40-8378-20FF08B0AA3A"
                        },
                        {
                            "title":"<span class=\"secnum\">7.59 </span> SDO_GEOR.getEndDateTime",
                            "href":"SDO_GEOR-reference.html#GUID-67D6AF6B-4C81-409E-A24B-0073A29B5D4E"
                        },
                        {
                            "title":"<span class=\"secnum\">7.60 </span> SDO_GEOR.getGCPGeorefMethod",
                            "href":"SDO_GEOR-reference.html#GUID-A6BBF1F3-E28C-414D-BE24-8F8C8266B121"
                        },
                        {
                            "title":"<span class=\"secnum\">7.61 </span> SDO_GEOR.getGCPGeorefModel",
                            "href":"SDO_GEOR-reference.html#GUID-9150C734-101F-479C-8FE4-3B3613C54EE1"
                        },
                        {
                            "title":"<span class=\"secnum\">7.62 </span> SDO_GEOR.getGeoreferenceType",
                            "href":"SDO_GEOR-reference.html#GUID-8714C52F-55A7-45D4-BF7D-D5F2B3C049D8"
                        },
                        {
                            "title":"<span class=\"secnum\">7.63 </span> SDO_GEOR.getGrayScale",
                            "href":"SDO_GEOR-reference.html#GUID-53C78A44-2984-4BDF-899D-13516BCF994D"
                        },
                        {
                            "title":"<span class=\"secnum\">7.64 </span> SDO_GEOR.getGrayScaleTable",
                            "href":"SDO_GEOR-reference.html#GUID-F0180134-FE1A-4449-8356-F22DB0566C74"
                        },
                        {
                            "title":"<span class=\"secnum\">7.65 </span> SDO_GEOR.getHistogram",
                            "href":"SDO_GEOR-reference.html#GUID-E653129D-E169-4A1B-81DA-7AB9C0CE4CDD"
                        },
                        {
                            "title":"<span class=\"secnum\">7.66 </span> SDO_GEOR.getHistogramTable",
                            "href":"SDO_GEOR-reference.html#GUID-9897AB37-35A1-4BFA-B804-8C48B4119B39"
                        },
                        {
                            "title":"<span class=\"secnum\">7.67 </span> SDO_GEOR.getID",
                            "href":"SDO_GEOR-reference.html#GUID-7955A61C-F302-48B2-9F9E-6557F03BB41C"
                        },
                        {
                            "title":"<span class=\"secnum\">7.68 </span> SDO_GEOR.getInterleavingType",
                            "href":"SDO_GEOR-reference.html#GUID-8BC4634E-0656-4F85-800A-8E035A2E078E"
                        },
                        {
                            "title":"<span class=\"secnum\">7.69 </span> SDO_GEOR.getJP2TileSize",
                            "href":"SDO_GEOR-reference.html#GUID-F6646DBF-661E-4675-B20E-392BF9AA92DC"
                        },
                        {
                            "title":"<span class=\"secnum\">7.70 </span> SDO_GEOR.getLayerDimension",
                            "href":"SDO_GEOR-reference.html#GUID-3159FA92-4402-46E7-9241-386124CB2948"
                        },
                        {
                            "title":"<span class=\"secnum\">7.71 </span> SDO_GEOR.getLayerID",
                            "href":"SDO_GEOR-reference.html#GUID-3C5811EE-112E-4BF1-BF55-2F4EBD49939A"
                        },
                        {
                            "title":"<span class=\"secnum\">7.72 </span> SDO_GEOR.getLayerOrdinate",
                            "href":"SDO_GEOR-reference.html#GUID-8D762C08-12AC-4B12-BBB9-7B9FA9DE4F76"
                        },
                        {
                            "title":"<span class=\"secnum\">7.73 </span> SDO_GEOR.getModelCoordinate",
                            "href":"SDO_GEOR-reference.html#GUID-9BA7B6F8-B6AE-4D4B-A264-F4977FB998C8"
                        },
                        {
                            "title":"<span class=\"secnum\">7.74 </span> SDO_GEOR.getModelCoordLocation",
                            "href":"SDO_GEOR-reference.html#GUID-EE3A495E-419C-42F1-849A-D9860B546FED"
                        },
                        {
                            "title":"<span class=\"secnum\">7.75 </span> SDO_GEOR.getModelSRID",
                            "href":"SDO_GEOR-reference.html#GUID-F0D1369B-A5E1-4229-9092-9438C9CDA2C7"
                        },
                        {
                            "title":"<span class=\"secnum\">7.76 </span> SDO_GEOR.getNODATA",
                            "href":"SDO_GEOR-reference.html#GUID-1AA7D522-24C3-447A-82D1-417EEEC8CE83"
                        },
                        {
                            "title":"<span class=\"secnum\">7.77 </span> SDO_GEOR.getPyramidMaxLevel",
                            "href":"SDO_GEOR-reference.html#GUID-EE05AFC3-451C-4C22-8949-37C50CF7C2E9"
                        },
                        {
                            "title":"<span class=\"secnum\">7.78 </span> SDO_GEOR.getPyramidType",
                            "href":"SDO_GEOR-reference.html#GUID-8FA880B8-D063-4890-B295-24F7653068B2"
                        },
                        {
                            "title":"<span class=\"secnum\">7.79 </span> SDO_GEOR.getRasterBlockLocator",
                            "href":"SDO_GEOR-reference.html#GUID-D16DF6A5-7526-4574-8ECE-5D9D08CD6207"
                        },
                        {
                            "title":"<span class=\"secnum\">7.80 </span> SDO_GEOR.getRasterBlocks",
                            "href":"SDO_GEOR-reference.html#GUID-684DC2C4-0F25-4EC8-A18C-8E1985A172E9"
                        },
                        {
                            "title":"<span class=\"secnum\">7.81 </span> SDO_GEOR.getRasterData",
                            "href":"SDO_GEOR-reference.html#GUID-4C357F31-6844-4CF2-BB86-E49A15F40522"
                        },
                        {
                            "title":"<span class=\"secnum\">7.82 </span> SDO_GEOR.getRasterRange",
                            "href":"SDO_GEOR-reference.html#GUID-E9A0961D-4D81-4888-97B0-B312FF487AD4"
                        },
                        {
                            "title":"<span class=\"secnum\">7.83 </span> SDO_GEOR.getRasterSubset",
                            "href":"SDO_GEOR-reference.html#GUID-CC66F0CA-96A9-4C4F-AB94-AEB5FE53C83D"
                        },
                        {
                            "title":"<span class=\"secnum\">7.84 </span> SDO_GEOR.getScaling",
                            "href":"SDO_GEOR-reference.html#GUID-19ADAF38-CC7A-4505-8431-F2E98B90CD9A"
                        },
                        {
                            "title":"<span class=\"secnum\">7.85 </span> SDO_GEOR.getSourceInfo",
                            "href":"SDO_GEOR-reference.html#GUID-CD4F1FF8-C311-48E4-8539-2C8E0E77EAD6"
                        },
                        {
                            "title":"<span class=\"secnum\">7.86 </span> SDO_GEOR.getSpatialDimNumber",
                            "href":"SDO_GEOR-reference.html#GUID-28F291E7-1F39-475E-8160-57DCB76E837C"
                        },
                        {
                            "title":"<span class=\"secnum\">7.87 </span> SDO_GEOR.getSpatialDimSizes",
                            "href":"SDO_GEOR-reference.html#GUID-3899F891-3354-415D-B065-CF15E5A74C35"
                        },
                        {
                            "title":"<span class=\"secnum\">7.88 </span> SDO_GEOR.getSpatialResolutions",
                            "href":"SDO_GEOR-reference.html#GUID-26CB9123-D7C8-495D-ABF0-64F6379CD258"
                        },
                        {
                            "title":"<span class=\"secnum\">7.89 </span> SDO_GEOR.getSpectralResolution",
                            "href":"SDO_GEOR-reference.html#GUID-466EEA06-E68C-4832-A724-4F69344EB43D"
                        },
                        {
                            "title":"<span class=\"secnum\">7.90 </span> SDO_GEOR.getSpectralUnit",
                            "href":"SDO_GEOR-reference.html#GUID-92D1CECE-29EA-41B6-BE94-9AE3A12F7767"
                        },
                        {
                            "title":"<span class=\"secnum\">7.91 </span> SDO_GEOR.getSRS",
                            "href":"SDO_GEOR-reference.html#GUID-FBC8D0DC-4C02-484B-8D99-F34A4C157EA7"
                        },
                        {
                            "title":"<span class=\"secnum\">7.92 </span> SDO_GEOR.getStatistics",
                            "href":"SDO_GEOR-reference.html#GUID-9327B512-DAAA-4A57-A16D-E689F92CB142"
                        },
                        {
                            "title":"<span class=\"secnum\">7.93 </span> SDO_GEOR.getTotalLayerNumber",
                            "href":"SDO_GEOR-reference.html#GUID-2063052F-9197-45EC-9E94-2CE3761A9D16"
                        },
                        {
                            "title":"<span class=\"secnum\">7.94 </span> SDO_GEOR.getULTCoordinate",
                            "href":"SDO_GEOR-reference.html#GUID-71BC354D-B800-455E-B0D6-ED020A86D7F9"
                        },
                        {
                            "title":"<span class=\"secnum\">7.95 </span> SDO_GEOR.getVAT",
                            "href":"SDO_GEOR-reference.html#GUID-B0457994-C5BB-4E37-9A36-72422D6AC0D0"
                        },
                        {
                            "title":"<span class=\"secnum\">7.96 </span> SDO_GEOR.getVersion",
                            "href":"SDO_GEOR-reference.html#GUID-7B723E5F-CA99-474E-BA1E-937A5890B4F6"
                        },
                        {
                            "title":"<span class=\"secnum\">7.97 </span> SDO_GEOR.hasBitmapMask",
                            "href":"SDO_GEOR-reference.html#GUID-A77DC2CB-F7FD-483C-A247-A7DC1C058CC4"
                        },
                        {
                            "title":"<span class=\"secnum\">7.98 </span> SDO_GEOR.hasGrayScale",
                            "href":"SDO_GEOR-reference.html#GUID-717E4524-7C00-4432-96D2-B4103BFA78A0"
                        },
                        {
                            "title":"<span class=\"secnum\">7.99 </span> SDO_GEOR.hasNODATAMask",
                            "href":"SDO_GEOR-reference.html#GUID-ED1F5CE2-5A65-4946-8732-F9D29A3FEDAD"
                        },
                        {
                            "title":"<span class=\"secnum\">7.100 </span> SDO_GEOR.hasPseudoColor",
                            "href":"SDO_GEOR-reference.html#GUID-6BE36C22-6E17-4E96-9928-29EB46869425"
                        },
                        {
                            "title":"<span class=\"secnum\">7.101 </span> SDO_GEOR.importFrom",
                            "href":"SDO_GEOR-reference.html#GUID-07B69D26-239F-4C52-A2D2-E776B2BABF8B"
                        },
                        {
                            "title":"<span class=\"secnum\">7.102 </span> SDO_GEOR.init",
                            "href":"SDO_GEOR-reference.html#GUID-524A6FD9-24D3-4CCA-A9D1-0B23819E4CA6"
                        },
                        {
                            "title":"<span class=\"secnum\">7.103 </span> SDO_GEOR.isBlank",
                            "href":"SDO_GEOR-reference.html#GUID-7B5C5A7A-5BDE-4DF2-9833-9FA2741A5C3C"
                        },
                        {
                            "title":"<span class=\"secnum\">7.104 </span> SDO_GEOR.isOrthoRectified",
                            "href":"SDO_GEOR-reference.html#GUID-91A3C404-720E-48CA-B82D-5EF6FBFEC215"
                        },
                        {
                            "title":"<span class=\"secnum\">7.105 </span> SDO_GEOR.isRectified",
                            "href":"SDO_GEOR-reference.html#GUID-04E21D35-E3FA-43D7-84F6-9D25BF18EB17"
                        },
                        {
                            "title":"<span class=\"secnum\">7.106 </span> SDO_GEOR.isSpatialReferenced",
                            "href":"SDO_GEOR-reference.html#GUID-7DD63B14-AAD8-4DC1-A519-DEC0E9C616FB"
                        },
                        {
                            "title":"<span class=\"secnum\">7.107 </span> SDO_GEOR.mask",
                            "href":"SDO_GEOR-reference.html#GUID-A1FF83F0-481F-436C-BA4A-5C0490A4A7ED"
                        },
                        {
                            "title":"<span class=\"secnum\">7.108 </span> SDO_GEOR.mergeLayers",
                            "href":"SDO_GEOR-reference.html#GUID-859F107A-4D75-4C36-B9FC-690FA202789C"
                        },
                        {
                            "title":"<span class=\"secnum\">7.109 </span> SDO_GEOR.mosaic",
                            "href":"SDO_GEOR-reference.html#GUID-17F61F94-A06C-41F4-A064-9243C8904F31"
                        },
                        {
                            "title":"<span class=\"secnum\">7.110 </span> SDO_GEOR.rectify",
                            "href":"SDO_GEOR-reference.html#GUID-FAC58FA1-3707-498F-BC69-7D36C17BDFA1"
                        },
                        {
                            "title":"<span class=\"secnum\">7.111 </span> SDO_GEOR.reproject",
                            "href":"SDO_GEOR-reference.html#GUID-9B3FA7F4-E6CA-4FDB-9DF9-EFEC63C19A55"
                        },
                        {
                            "title":"<span class=\"secnum\">7.112 </span> SDO_GEOR.scaleCopy",
                            "href":"SDO_GEOR-reference.html#GUID-3F7A39BD-67FB-40B7-9143-32FA5DFD9628"
                        },
                        {
                            "title":"<span class=\"secnum\">7.113 </span> SDO_GEOR.schemaValidate",
                            "href":"SDO_GEOR-reference.html#GUID-64122DD0-D412-49A9-A73B-7D550CCCA78E"
                        },
                        {
                            "title":"<span class=\"secnum\">7.114 </span> SDO_GEOR.setBeginDateTime",
                            "href":"SDO_GEOR-reference.html#GUID-E88D0F7A-AD22-4139-ADDC-18AD9D554633"
                        },
                        {
                            "title":"<span class=\"secnum\">7.115 </span> SDO_GEOR.setBinFunction",
                            "href":"SDO_GEOR-reference.html#GUID-D462448E-DED4-46A0-8E45-D92EF309D969"
                        },
                        {
                            "title":"<span class=\"secnum\">7.116 </span> SDO_GEOR.setBinTable",
                            "href":"SDO_GEOR-reference.html#GUID-2D5830C4-DBF6-4338-86B6-0D10EBF5BF23"
                        },
                        {
                            "title":"<span class=\"secnum\">7.117 </span> SDO_GEOR.setBitmapMask",
                            "href":"SDO_GEOR-reference.html#GUID-64BE6060-792D-4A78-8375-6F704CDE7284"
                        },
                        {
                            "title":"<span class=\"secnum\">7.118 </span> SDO_GEOR.setBlankCellValue",
                            "href":"SDO_GEOR-reference.html#GUID-2BD1F5D5-ACD1-4923-B238-943F26BAE014"
                        },
                        {
                            "title":"<span class=\"secnum\">7.119 </span> SDO_GEOR.setColorMap",
                            "href":"SDO_GEOR-reference.html#GUID-0A226840-C338-4B71-B705-47F7CDD6FC09"
                        },
                        {
                            "title":"<span class=\"secnum\">7.120 </span> SDO_GEOR.setColorMapTable",
                            "href":"SDO_GEOR-reference.html#GUID-62911DCF-1C59-45CA-BB18-B7FC9C3F2CDE"
                        },
                        {
                            "title":"<span class=\"secnum\">7.121 </span> SDO_GEOR.setControlPoint",
                            "href":"SDO_GEOR-reference.html#GUID-44A07135-D379-4DE1-86B1-D299388033E4"
                        },
                        {
                            "title":"<span class=\"secnum\">7.122 </span> SDO_GEOR.setDefaultAlpha",
                            "href":"SDO_GEOR-reference.html#GUID-9E830C52-D920-4A12-BEB6-73CBCD277CDB"
                        },
                        {
                            "title":"<span class=\"secnum\">7.123 </span> SDO_GEOR.setDefaultBlue",
                            "href":"SDO_GEOR-reference.html#GUID-45AB9089-BF53-474B-B59C-28AEE5A34C59"
                        },
                        {
                            "title":"<span class=\"secnum\">7.124 </span> SDO_GEOR.setDefaultColorLayer",
                            "href":"SDO_GEOR-reference.html#GUID-3E6EA4DC-DEEF-42B7-B296-92FA58515C4D"
                        },
                        {
                            "title":"<span class=\"secnum\">7.125 </span> SDO_GEOR.setDefaultGreen",
                            "href":"SDO_GEOR-reference.html#GUID-0CB5060E-6733-40E0-B6AE-3951378EDC4A"
                        },
                        {
                            "title":"<span class=\"secnum\">7.126 </span> SDO_GEOR.setDefaultPyramidLevel",
                            "href":"SDO_GEOR-reference.html#GUID-DAD267E0-410B-493F-92E8-FE7F6EF33B6F"
                        },
                        {
                            "title":"<span class=\"secnum\">7.127 </span> SDO_GEOR.setDefaultRed",
                            "href":"SDO_GEOR-reference.html#GUID-70FC29B9-588B-47E1-BC48-DE3162C6785E"
                        },
                        {
                            "title":"<span class=\"secnum\">7.128 </span> SDO_GEOR.setEndDateTime",
                            "href":"SDO_GEOR-reference.html#GUID-D51C807D-050E-40A6-A1E8-E6E09B1C8296"
                        },
                        {
                            "title":"<span class=\"secnum\">7.129 </span> SDO_GEOR.setGCPGeorefMethod",
                            "href":"SDO_GEOR-reference.html#GUID-7F595E4E-2770-4012-9CFE-3B4725C82EF1"
                        },
                        {
                            "title":"<span class=\"secnum\">7.130 </span> SDO_GEOR.setGCPGeorefModel",
                            "href":"SDO_GEOR-reference.html#GUID-C6DD6322-F4C7-48B9-B009-AD92A54AFBC8"
                        },
                        {
                            "title":"<span class=\"secnum\">7.131 </span> SDO_GEOR.setGrayScale",
                            "href":"SDO_GEOR-reference.html#GUID-CF862968-0D31-430D-A84E-8CAB59BD5BBB"
                        },
                        {
                            "title":"<span class=\"secnum\">7.132 </span> SDO_GEOR.setGrayScaleTable",
                            "href":"SDO_GEOR-reference.html#GUID-8477B476-2E15-443E-884C-381AEAC9CD4A"
                        },
                        {
                            "title":"<span class=\"secnum\">7.133 </span> SDO_GEOR.setHistogramTable",
                            "href":"SDO_GEOR-reference.html#GUID-6E4C33CD-3685-45A9-B6EB-72C4B61E05BE"
                        },
                        {
                            "title":"<span class=\"secnum\">7.134 </span> SDO_GEOR.setID",
                            "href":"SDO_GEOR-reference.html#GUID-B1E65DF0-67EE-4C91-823D-F420067D63DB"
                        },
                        {
                            "title":"<span class=\"secnum\">7.135 </span> SDO_GEOR.setLayerID",
                            "href":"SDO_GEOR-reference.html#GUID-BEADCA3C-997E-4977-97B3-6A4D979C3EDA"
                        },
                        {
                            "title":"<span class=\"secnum\">7.136 </span> SDO_GEOR.setLayerOrdinate",
                            "href":"SDO_GEOR-reference.html#GUID-E759746C-B9D6-499B-851E-558FF2C3FE6C"
                        },
                        {
                            "title":"<span class=\"secnum\">7.137 </span> SDO_GEOR.setModelCoordLocation",
                            "href":"SDO_GEOR-reference.html#GUID-B5428CC9-FD69-4858-8F71-7E78F5AFEB6A"
                        },
                        {
                            "title":"<span class=\"secnum\">7.138 </span> SDO_GEOR.setModelSRID",
                            "href":"SDO_GEOR-reference.html#GUID-8CE5E5B6-F109-444F-9CE2-91580CD085D3"
                        },
                        {
                            "title":"<span class=\"secnum\">7.139 </span> SDO_GEOR.setNODATAMask",
                            "href":"SDO_GEOR-reference.html#GUID-56D139C4-E871-4117-887B-49947D2E8599"
                        },
                        {
                            "title":"<span class=\"secnum\">7.140 </span> SDO_GEOR.setOrthoRectified",
                            "href":"SDO_GEOR-reference.html#GUID-7CF82BDE-3260-4A9C-9F88-6AB10D45F7CF"
                        },
                        {
                            "title":"<span class=\"secnum\">7.141 </span> SDO_GEOR.setRasterType",
                            "href":"SDO_GEOR-reference.html#GUID-E04962DA-2B64-4FF0-9DFC-C498A761A8A8"
                        },
                        {
                            "title":"<span class=\"secnum\">7.142 </span> SDO_GEOR.setRectified",
                            "href":"SDO_GEOR-reference.html#GUID-8696A345-CE8E-4B95-83EE-ECA63CEAE400"
                        },
                        {
                            "title":"<span class=\"secnum\">7.143 </span> SDO_GEOR.setScaling",
                            "href":"SDO_GEOR-reference.html#GUID-4CCE098B-6418-45F5-9290-9DE81669BE29"
                        },
                        {
                            "title":"<span class=\"secnum\">7.144 </span> SDO_GEOR.setSourceInfo",
                            "href":"SDO_GEOR-reference.html#GUID-944E1055-20E6-43B1-8CDB-AEC973D9EDF6"
                        },
                        {
                            "title":"<span class=\"secnum\">7.145 </span> SDO_GEOR.setSpatialReferenced",
                            "href":"SDO_GEOR-reference.html#GUID-57042800-4006-4F06-A9FB-6D9741F7A9D8"
                        },
                        {
                            "title":"<span class=\"secnum\">7.146 </span> SDO_GEOR.setSpatialResolutions",
                            "href":"SDO_GEOR-reference.html#GUID-98C50CEE-07B1-4E53-A5D0-DB0549F96209"
                        },
                        {
                            "title":"<span class=\"secnum\">7.147 </span> SDO_GEOR.setSpectralResolution",
                            "href":"SDO_GEOR-reference.html#GUID-AD658B01-4A19-420E-AAF5-75A8448534C9"
                        },
                        {
                            "title":"<span class=\"secnum\">7.148 </span> SDO_GEOR.setSpectralUnit",
                            "href":"SDO_GEOR-reference.html#GUID-8293CD28-BF13-4F06-99E4-DE08C2062337"
                        },
                        {
                            "title":"<span class=\"secnum\">7.149 </span> SDO_GEOR.setSRS",
                            "href":"SDO_GEOR-reference.html#GUID-0406AB05-BA9B-4331-8613-B480A9F12C09"
                        },
                        {
                            "title":"<span class=\"secnum\">7.150 </span> SDO_GEOR.setStatistics",
                            "href":"SDO_GEOR-reference.html#GUID-61D4570C-0CA9-40AC-B0A1-912ADDE249D3"
                        },
                        {
                            "title":"<span class=\"secnum\">7.151 </span> SDO_GEOR.setULTCoordinate",
                            "href":"SDO_GEOR-reference.html#GUID-B5BF3AB1-3EB5-4D86-B417-28662B7AD00B"
                        },
                        {
                            "title":"<span class=\"secnum\">7.152 </span> SDO_GEOR.setVAT",
                            "href":"SDO_GEOR-reference.html#GUID-5F1434C6-FC85-48B0-B3D2-197F532075B2"
                        },
                        {
                            "title":"<span class=\"secnum\">7.153 </span> SDO_GEOR.setVersion",
                            "href":"SDO_GEOR-reference.html#GUID-D8D9A17A-CCF5-425A-879B-0BC48E2DF760"
                        },
                        {
                            "title":"<span class=\"secnum\">7.154 </span> SDO_GEOR.subset",
                            "href":"SDO_GEOR-reference.html#GUID-827C49FA-3759-4EC3-8ED5-A9A4E623EEEB"
                        },
                        {
                            "title":"<span class=\"secnum\">7.155 </span> SDO_GEOR.updateRaster",
                            "href":"SDO_GEOR-reference.html#GUID-ED3D72BF-B5C4-46B1-832C-287BF7696B3E"
                        },
                        {
                            "title":"<span class=\"secnum\">7.156 </span> SDO_GEOR.validateBlockMBR",
                            "href":"SDO_GEOR-reference.html#GUID-1AC1C8C0-9D2D-45F5-9D09-EE802DEDDD76"
                        },
                        {
                            "title":"<span class=\"secnum\">7.157 </span> SDO_GEOR.validateGeoRaster",
                            "href":"SDO_GEOR-reference.html#GUID-72D06328-134D-473E-8279-F0C3B6ADEE34"
                        },
                        {
                            "title":"<span class=\"secnum\">7.158 </span> SDO_GEOR.warp",
                            "href":"SDO_GEOR-reference.html#GUID-1B480F30-85C6-4F02-BC5E-142A872BEF64"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">8 </span> SDO_GEOR_ADMIN Package Reference",
                    "href":"SDO_GEOR_ADMIN-reference.html#GUID-6F9B00F3-56C1-4AF9-82A6-DFBAB1BB489E",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">8.1 </span> SDO_GEOR_ADMIN.checkSysdataEntries",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-786E293A-2F1B-4605-AC82-4B788A1BDED6"
                        },
                        {
                            "title":"<span class=\"secnum\">8.2 </span> SDO_GEOR_ADMIN.enableGeoRaster",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-F0868A0F-7DFB-4F0F-AA30-0CC41D8B708E"
                        },
                        {
                            "title":"<span class=\"secnum\">8.3 </span> SDO_GEOR_ADMIN.isGeoRasterEnabled",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-05037DB2-5C29-4B19-ABF5-7586CF3117C8"
                        },
                        {
                            "title":"<span class=\"secnum\">8.4 </span> SDO_GEOR_ADMIN.isRDTNameUnique",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-05492210-9524-40A2-8A29-6B7028566FAA"
                        },
                        {
                            "title":"<span class=\"secnum\">8.5 </span> SDO_GEOR_ADMIN.isUpgradeNeeded",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-2E813E4E-C5A5-4884-97FA-DB8E6BEC87D6"
                        },
                        {
                            "title":"<span class=\"secnum\">8.6 </span> SDO_GEOR_ADMIN.listGeoRasterColumns",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-E7199BAA-4C99-4D5C-A2E5-F2DC95442D14"
                        },
                        {
                            "title":"<span class=\"secnum\">8.7 </span> SDO_GEOR_ADMIN.listGeoRasterObjects",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-2B2ED5B6-BE91-4BBD-91F0-1A9B98565283"
                        },
                        {
                            "title":"<span class=\"secnum\">8.8 </span> SDO_GEOR_ADMIN.listGeoRasterTables",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-3BDBD3E3-6FA2-4230-9042-2DF812BCF629"
                        },
                        {
                            "title":"<span class=\"secnum\">8.9 </span> SDO_GEOR_ADMIN.listDanglingRasterData",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-C20A7F7C-C861-437E-BFD3-791B7AFAFB4C"
                        },
                        {
                            "title":"<span class=\"secnum\">8.10 </span> SDO_GEOR_ADMIN.listRDT",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-2CDF0178-612F-4DCA-A63D-E151AC4C3CCF"
                        },
                        {
                            "title":"<span class=\"secnum\">8.11 </span> SDO_GEOR_ADMIN.listRegisteredRDT",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-C1A8A6F0-8085-4343-8FAE-08E590FFBBB8"
                        },
                        {
                            "title":"<span class=\"secnum\">8.12 </span> SDO_GEOR_ADMIN.listUnregisteredRDT",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-579B7EA9-5D89-45B2-A9F2-FC9BE216C827"
                        },
                        {
                            "title":"<span class=\"secnum\">8.13 </span> SDO_GEOR_ADMIN.maintainSysdataEntries",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-3EEACD9B-7B9C-4606-9DC0-966CFE0CB469"
                        },
                        {
                            "title":"<span class=\"secnum\">8.14 </span> SDO_GEOR_ADMIN.registerGeoRasterColumns",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-8FC19048-E701-4D73-98E5-64140ED503B3"
                        },
                        {
                            "title":"<span class=\"secnum\">8.15 </span> SDO_GEOR_ADMIN.registerGeoRasterObjects",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-13898CD3-CD1F-4C78-A023-1ED2B3D6C524"
                        },
                        {
                            "title":"<span class=\"secnum\">8.16 </span> SDO_GEOR_ADMIN.upgradeGeoRaster",
                            "href":"SDO_GEOR_ADMIN-reference.html#GUID-7B7D8C75-46E9-4278-8B2E-60675055A8F2"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">9 </span> SDO_GEOR_AGGR Package Reference",
                    "href":"SDO_GEOR_AGGR-referencer-ref.html#GUID-92406947-E079-487D-B0D0-3342ECC23E34",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">9.1 </span> SDO_GEOR_AGGR.append",
                            "href":"SDO_GEOR_AGGR-referencer-ref.html#GUID-D47B17BE-79C2-4610-B75A-D03182FD40FB"
                        },
                        {
                            "title":"<span class=\"secnum\">9.2 </span> SDO_GEOR_AGGR.getMosaicExtent",
                            "href":"SDO_GEOR_AGGR-referencer-ref.html#GUID-74A098CB-5EC9-406B-9437-FAEDEB012A2C"
                        },
                        {
                            "title":"<span class=\"secnum\">9.3 </span> SDO_GEOR_AGGR.getMosaicResolutions",
                            "href":"SDO_GEOR_AGGR-referencer-ref.html#GUID-D0BB7FCA-490F-4988-95BD-5DDF49D5B8CF"
                        },
                        {
                            "title":"<span class=\"secnum\">9.4 </span> SDO_GEOR_AGGR.getMosaicStatistics",
                            "href":"SDO_GEOR_AGGR-referencer-ref.html#GUID-5B00266A-5935-40D0-9341-F6B8067F289D"
                        },
                        {
                            "title":"<span class=\"secnum\">9.5 </span> SDO_GEOR_AGGR.getMosaicSubset",
                            "href":"SDO_GEOR_AGGR-referencer-ref.html#GUID-89303715-7E1A-46B9-8CDE-0228C48388D7"
                        },
                        {
                            "title":"<span class=\"secnum\">9.6 </span> SDO_GEOR_AGGR.mosaicSubset",
                            "href":"SDO_GEOR_AGGR-referencer-ref.html#GUID-85F23FB6-7F4B-40C4-B023-25DE37FA53BF"
                        },
                        {
                            "title":"<span class=\"secnum\">9.7 </span> SDO_GEOR_AGGR.validateForMosaicSubset",
                            "href":"SDO_GEOR_AGGR-referencer-ref.html#GUID-517B4271-BF48-45C3-B989-88EE40CF780A"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">10 </span> SDO_GEOR_GDAL Package Reference",
                    "href":"SDO_GEOR_GDAL-reference.html#GUID-67F7509E-BB8E-438B-9007-E8DA503C5AD2",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">10.1 </span> SDO_GEOR_GDAL.dem",
                            "href":"SDO_GEOR_GDAL-reference.html#GUID-1129639F-CFCD-40EB-ADE0-400EC9B4A459"
                        },
                        {
                            "title":"<span class=\"secnum\">10.2 </span> SDO_GEOR_GDAL.translate",
                            "href":"SDO_GEOR_GDAL-reference.html#GUID-FD266345-B16B-41EA-8567-07265C15EF61"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">11 </span> SDO_GEOR_IP Package Reference",
                    "href":"SDO_GEOR_IP-reference-ref.html#GUID-658BBDD1-0155-44BC-8A21-CDC1C088E74F",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">11.1 </span> SDO_GEOR_IP.dodge",
                            "href":"SDO_GEOR_IP-reference-ref.html#GUID-6E3461D5-3DCB-4212-ADE5-7E200F541FA4"
                        },
                        {
                            "title":"<span class=\"secnum\">11.2 </span> SDO_GEOR_IP.equalize",
                            "href":"SDO_GEOR_IP-reference-ref.html#GUID-5E8228CC-DD00-42F4-80A4-458533A998EA"
                        },
                        {
                            "title":"<span class=\"secnum\">11.3 </span> SDO_GEOR_IP.filter",
                            "href":"SDO_GEOR_IP-reference-ref.html#GUID-2EDEFFD7-15AA-4C94-B1D0-87B078B7444E"
                        },
                        {
                            "title":"<span class=\"secnum\">11.4 </span> SDO_GEOR_IP.histogramMatch",
                            "href":"SDO_GEOR_IP-reference-ref.html#GUID-A3F4F825-3B80-4673-9CC0-010AFCBE01AA"
                        },
                        {
                            "title":"<span class=\"secnum\">11.5 </span> SDO_GEOR_IP.normalize",
                            "href":"SDO_GEOR_IP-reference-ref.html#GUID-2D8EF3FF-9A5D-49ED-BC27-56D145E96C77"
                        },
                        {
                            "title":"<span class=\"secnum\">11.6 </span> SDO_GEOR_IP.piecewiseStretch",
                            "href":"SDO_GEOR_IP-reference-ref.html#GUID-4996A4C1-3CEA-4F4A-9D3E-1251AC3DEFB3"
                        },
                        {
                            "title":"<span class=\"secnum\">11.7 </span> SDO_GEOR_IP.stretch",
                            "href":"SDO_GEOR_IP-reference-ref.html#GUID-B6E29A85-58A4-4DCA-BF00-D0B4C46DFE8E"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">12 </span> SDO_GEOR_RA Package Reference",
                    "href":"sdo-geor-ra-ref.html#GUID-7E8EC42B-D663-49EF-B6D8-158A0EC10333",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">12.1 </span> SDO_GEOR_RA.classify",
                            "href":"sdo-geor-ra-ref.html#GUID-D9DA6608-7D97-4428-B1B2-002C371846E9"
                        },
                        {
                            "title":"<span class=\"secnum\">12.2 </span> SDO_GEOR_RA.diff",
                            "href":"sdo-geor-ra-ref.html#GUID-B879FE32-88C6-4C85-95B8-47B7EDEE8C02"
                        },
                        {
                            "title":"<span class=\"secnum\">12.3 </span> SDO_GEOR_RA.findCells",
                            "href":"sdo-geor-ra-ref.html#GUID-67FDA0FA-D055-4821-964F-600660861A72"
                        },
                        {
                            "title":"<span class=\"secnum\">12.4 </span> SDO_GEOR_RA.isOverlap",
                            "href":"sdo-geor-ra-ref.html#GUID-B64A8557-B92D-4588-812D-2F767338EA68"
                        },
                        {
                            "title":"<span class=\"secnum\">12.5 </span> SDO_GEOR_RA.over",
                            "href":"sdo-geor-ra-ref.html#GUID-D6105A06-3CC0-42C9-AC57-81333017C3A4"
                        },
                        {
                            "title":"<span class=\"secnum\">12.6 </span> SDO_GEOR_RA.rasterMathOp",
                            "href":"sdo-geor-ra-ref.html#GUID-BB7A762E-E615-43AD-9D74-5E917D29F333"
                        },
                        {
                            "title":"<span class=\"secnum\">12.7 </span> SDO_GEOR_RA.rasterUpdate",
                            "href":"sdo-geor-ra-ref.html#GUID-7F1A50AC-9595-4AC3-83E3-D7233C9FAF2E"
                        },
                        {
                            "title":"<span class=\"secnum\">12.8 </span> SDO_GEOR_RA.stack",
                            "href":"sdo-geor-ra-ref.html#GUID-90E78211-B677-4D22-8CF8-2E7BB7740F39"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">13 </span> SDO_GEOR_UTL Package Reference",
                    "href":"SDO_GEOR_UTL-reference.html#GUID-080B4F44-F59D-4E2A-AA97-FF209C69C4D2",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">13.1 </span> SDO_GEOR_UTL.calcOptimizedBlockSize",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-4F642F02-94B1-40FA-8C92-E916031293D1"
                        },
                        {
                            "title":"<span class=\"secnum\">13.2 </span> SDO_GEOR_UTL.calcRasterNominalSize",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-E60671B6-C7B4-4D76-BCA8-C1BDC2F2D2FB"
                        },
                        {
                            "title":"<span class=\"secnum\">13.3 </span> SDO_GEOR_UTL.calcRasterStorageSize",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-D4F67AB0-23F3-497E-BF6E-86B9AF2D7D4A"
                        },
                        {
                            "title":"<span class=\"secnum\">13.4 </span> SDO_GEOR_UTL.calcSurfaceArea",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-7D97E9ED-64E7-44BD-8920-0CAF4B297DA1"
                        },
                        {
                            "title":"<span class=\"secnum\">13.5 </span> SDO_GEOR_UTL.clearReportTable",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-DC1098B1-94FF-4150-9BBF-13E30CE34F15"
                        },
                        {
                            "title":"<span class=\"secnum\">13.6 </span> SDO_GEOR_UTL.createDMLTrigger",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-CCA772B5-AA1E-4A53-B64C-67D8F6052CF2"
                        },
                        {
                            "title":"<span class=\"secnum\">13.7 </span> SDO_GEOR_UTL.createReportTable",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-E35FA2E9-24FD-455B-B53F-B42DDDD3D71C"
                        },
                        {
                            "title":"<span class=\"secnum\">13.8 </span> SDO_GEOR_UTL.disableReport",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-7102EF4A-0279-4079-83FB-1B8EFE8C3A12"
                        },
                        {
                            "title":"<span class=\"secnum\">13.9 </span> SDO_GEOR_UTL.dropReportTable",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-E4389281-1803-4FB7-A61C-42D0CD4105FC"
                        },
                        {
                            "title":"<span class=\"secnum\">13.10 </span> SDO_GEOR_UTL.emptyBlocks",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-0BA5629B-AD97-4199-9303-FD5B8B363D03"
                        },
                        {
                            "title":"<span class=\"secnum\">13.11 </span> SDO_GEOR_UTL.enableReport",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-15481B20-58FD-47D8-A97D-65F8F1FE287D"
                        },
                        {
                            "title":"<span class=\"secnum\">13.12 </span> SDO_GEOR_UTL.fillEmptyBlocks",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-444B7788-ED0A-4207-8246-E29E16C11339"
                        },
                        {
                            "title":"<span class=\"secnum\">13.13 </span> SDO_GEOR_UTL.generateColorRamp",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-1902FAAC-6F04-4CD7-AC86-52F70FE81E9D"
                        },
                        {
                            "title":"<span class=\"secnum\">13.14 </span> SDO_GEOR_UTL.generateGrayRamp",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-C4AD8E4E-7A1B-4399-9F47-61BEC51247E7"
                        },
                        {
                            "title":"<span class=\"secnum\">13.15 </span> SDO_GEOR_UTL.getAllStatusReport",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-24528301-570E-4B73-A11F-EBAD9CA211AB"
                        },
                        {
                            "title":"<span class=\"secnum\">13.16 </span> SDO_GEOR_UTL.getMaxMemSize",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-75EFC6D7-A1F9-4FC1-A31D-91E82521B8DD"
                        },
                        {
                            "title":"<span class=\"secnum\">13.17 </span> SDO_GEOR_UTL.getReadBlockMemSize",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-0E714A7B-2225-4561-95BC-0AE5AD5AC20C"
                        },
                        {
                            "title":"<span class=\"secnum\">13.18 </span> SDO_GEOR_UTL.getProgress",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-34284A54-1792-4845-8F27-078AAE159413"
                        },
                        {
                            "title":"<span class=\"secnum\">13.19 </span> SDO_GEOR_UTL.getStatusReport",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-7AC9801F-D891-4A9B-9BD9-87D273C7DC6F"
                        },
                        {
                            "title":"<span class=\"secnum\">13.20 </span> SDO_GEOR_UTL.getWriteBlockMemSize",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-736EBE83-DFC0-45B5-B31D-AD3F2DED89A6"
                        },
                        {
                            "title":"<span class=\"secnum\">13.21 </span> SDO_GEOR_UTL.isReporting",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-7AB56802-6449-4DD0-B61C-80E92EE011BC"
                        },
                        {
                            "title":"<span class=\"secnum\">13.22 </span> SDO_GEOR_UTL.makeRDTNamesUnique",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-94664890-EDA7-4518-B87A-99AD4D8672DA"
                        },
                        {
                            "title":"<span class=\"secnum\">13.23 </span> SDO_GEOR_UTL.recreateDMLTriggers",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-AD56A631-0111-44A2-8A94-4F326FCABA3B"
                        },
                        {
                            "title":"<span class=\"secnum\">13.24 </span> SDO_GEOR_UTL.renameRDT",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-9B5168A6-2624-4E80-B8C8-DC4815B94E36"
                        },
                        {
                            "title":"<span class=\"secnum\">13.25 </span> SDO_GEOR_UTL.setClientID",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-C0CB06F5-4A64-436E-99D3-C9F48C759585"
                        },
                        {
                            "title":"<span class=\"secnum\">13.26 </span> SDO_GEOR_UTL.setMaxMemSize",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-C24BCE97-C7D9-4720-B169-190CD66405F8"
                        },
                        {
                            "title":"<span class=\"secnum\">13.27 </span> SDO_GEOR_UTL.setReadBlockMemSize",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-32CABCD8-4AF1-4A43-B4FA-F664C939215F"
                        },
                        {
                            "title":"<span class=\"secnum\">13.28 </span> SDO_GEOR_UTL.setSeqID",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-1E056015-616E-4D1D-8524-248A6E60CEE9"
                        },
                        {
                            "title":"<span class=\"secnum\">13.29 </span> SDO_GEOR_UTL.setWriteBlockMemSize",
                            "href":"SDO_GEOR_UTL-reference.html#GUID-DCAF3CC8-8A5F-4E76-AA33-9A5CAE083B6F"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">A </span> GeoRaster Metadata XML Schema",
                    "href":"georaster-metadata-xml-schema.html#GUID-6814D440-F50A-473C-84F6-60709DC5620D"
                },
                {
                    "title":"Index",
                    "href":"book-index.html"
                }
            ]
        }
    ]
});