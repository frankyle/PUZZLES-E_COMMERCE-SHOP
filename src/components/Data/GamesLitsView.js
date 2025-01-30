import React, { useState, useEffect } from 'react';
import axiosInstance from '../../auth/axiosInstance';  // Adjust path to your axios instance
import { FaEye } from 'react-icons/fa';

const GamesListView = () => {
  const [games, setGames] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axiosInstance.get('/api/games/games/');
        console.log('API Response:', response.data);
        setGames(response.data.results);  // Adjust if API response structure is different
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handleView = (id) => {
    console.log(`Viewing game with ID: ${id}`);
    // navigate(`/game-view/${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {Array.isArray(games) && games.length > 0 ? (
          games.map((game) => (
            <div key={game.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-transform hover:scale-105">
              {game.image && (
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-64 object-cover cursor-pointer rounded-t-lg transition-all duration-300 ease-in-out hover:opacity-75"
                  onClick={() => openModal(game.image)}
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{game.name}</h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{game.description}</p>
                <div className="mt-4 space-y-2">
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                    <strong>Price:</strong> ${game.price}
                  </p>
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                    <strong>Stock:</strong> {game.stock}
                  </p>
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                    <strong>Sold:</strong> {game.sold}
                  </p>
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                    <strong>Rating:</strong> {game.rating}
                  </p>
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                    <strong>Category:</strong> {game.category}
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 flex justify-between items-center border-t border-gray-300 dark:border-gray-700">
                <button
                  onClick={() => handleView(game.id)}
                  className="text-yellow-500 hover:text-yellow-700 transition-colors duration-200"
                  title="View Game"
                >
                  <FaEye size={20} />
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                  onClick={() => console.log('Add to Cart clicked')}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-4">No games available.</div>
        )}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-full max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesListView;
