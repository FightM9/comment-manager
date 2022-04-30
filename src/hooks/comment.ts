import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURL } from '../api/config';

/**
 * Fetching comment from API
 *
 * @param url API endpoint
 * @param id Last commenе id
 * @param updateTime Сountdown to new update
 * @returns Comment feed data
 */

export const useCommentFetch = (
  url: string,
  id: string | number,
  updateTime = 5000
) => {
  const [status, setStatus] = useState(true);
  const [comments, setComments] = useState([]);
  const [update, setUpdate] = useState(0);

  // Сhange state every updateTime milisecond to trigger main useEffect
  useEffect(() => {
    setInterval(() => {
      setUpdate(Math.random());
    }, updateTime);
  }, [updateTime]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus(true);

      const data = new FormData();
      data.append('actionName', 'MessagesLoad');
      data.append('messageId', id.toString());

      await axios.post(baseURL, data).then((res) => {
        if (res.data.Messages) {
          setComments(res.data.Messages);
        }
        setStatus(false);
      });
    };

    fetchData();
  }, [url, update, id]);

  return { status, comments };
};
